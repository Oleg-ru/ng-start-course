import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  public colors = ["red", "blue", "green"];
  protected isShow = false;
}
