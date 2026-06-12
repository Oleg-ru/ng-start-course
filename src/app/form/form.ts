import {Component, inject} from '@angular/core';
import {
  AbstractControl, FormArray, FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

export function checkRegExp(regExp: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = regExp.test(control.value);
    return !forbidden ? {forbiddenValue: {value: control.value}} : null;
  }
}

export const confirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null  => {
  return control.value.password === control.value.confirmPassword ? null : {PasswordsNotEquals: true}
}

// Regex для валидации email (стандартный)
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {

  private fb = inject(FormBuilder);
  public get skills(): FormArray {
    return this.fbForm.get('skills') as FormArray;
  }

  public form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  public loginForm = new FormGroup({
    mail: new FormControl('', [checkRegExp(emailRegex)]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  }, confirmPassword);

  public fbForm = this.fb.group({
    name: [''],
    skills: this.fb.array([])
  })

  handleSubmit = () => {
    console.log(this.form.value)
  }

  public newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      experience: '',
    })
  }

  public addSkill() {
    this.skills.push(this.newSkill());
  }

  public removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  public onSubmit() {
    console.log(this.fbForm.value);
  }
}
