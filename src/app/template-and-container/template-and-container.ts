import { Component } from '@angular/core';
import {NgForOf, NgTemplateOutlet} from '@angular/common';

@Component({
  selector: 'app-template-and-container',
  imports: [
    NgForOf,
    NgTemplateOutlet
  ],
  templateUrl: './template-and-container.html',
  styleUrl: './template-and-container.css',
})
export class NgTemplateAndContainer {}
