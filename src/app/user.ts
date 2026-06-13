import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUserLogger = new BehaviorSubject<boolean>(false);
  public login() {
    this.isUserLogger.next(true);
  }
}
