import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-directives',
  imports: [
    NgForOf
  ],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  public colors = ["red", "blue", "green"];
}
