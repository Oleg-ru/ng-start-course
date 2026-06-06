import { Component } from '@angular/core';
import {AppCalculator} from './calculator/app-calculator/app-calculator';
import {Navigation} from './navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [
    AppCalculator,
    Navigation
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
