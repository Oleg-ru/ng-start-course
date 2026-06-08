import { Component } from '@angular/core';
import {Children} from '../children/children';

@Component({
  selector: 'app-parent',
  imports: [
    Children
  ],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  public title = 'Заголовок от бати :-)';
  handleEventParent(newValue: string) {
    this.title = newValue;
  }
}
