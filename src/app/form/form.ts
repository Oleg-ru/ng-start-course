import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  public form = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  handleSubmit = () => {
    console.log(this.form.value)
  }
}
