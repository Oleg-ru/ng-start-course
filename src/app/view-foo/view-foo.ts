import {Component, inject} from '@angular/core';
import {UserService} from '../user';

@Component({
  selector: 'app-view-foo',
  imports: [],
  templateUrl: './view-foo.html',
  styleUrl: './view-foo.css',
})
export class ViewFoo {
  public userService = inject(UserService);

  public login() {
    this.userService.login();
  }
}
