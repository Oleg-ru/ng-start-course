import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ChangeColorDirective} from './custom_directives/change-color-directive';
import {IfCustom} from './custom_directives/if-custom';

@Component({
  selector: 'app-directives',
  imports: [
    NgForOf,
    NgIf,
    ChangeColorDirective,
    IfCustom
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  public colorsList = ["red", "blue", "green", "tomato"];
  protected isShow = false;
}
