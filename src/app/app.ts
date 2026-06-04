import { Component } from '@angular/core';
import {AppCalculator} from './app-calculator/app-calculator';

@Component({
  selector: 'app-root',
  imports: [
    AppCalculator
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
