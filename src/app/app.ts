import { Component } from '@angular/core';
import {AppCalculator} from './calculator/app-calculator/app-calculator';
import {Navigation} from './navigation/navigation';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    AppCalculator,
    Navigation,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
