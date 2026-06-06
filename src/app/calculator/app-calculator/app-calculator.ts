import {Component, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {History} from '../history/history';
import {LogHistory} from '../../log-history';

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule,
    History
  ],
  templateUrl: './app-calculator.html',
  styleUrl: './app-calculator.css',
})
export class AppCalculator {
  public operand_a = 0;
  public operand_b = 0;
  public operations = ["+", "-", "*", "/"]
  public operation = "+"
  public result = signal(0);
  public historyService = inject(LogHistory);
  public logCalculation = () => {
    this.historyService.addHistory(this.operand_a, this.operand_b, this.operation, this.result())
  }
  public get hasHistory() {
    return this.historyService.getAllHistory().length >= 1;
  }
  public calculate = () => {
    switch (this.operation) {
      case ("+"): {
        this.result.set(+this.operand_a + +this.operand_b);
        break;
      }
      case ("-"): {
        this.result.set(+this.operand_a - +this.operand_b);
        break;
      }
      case ("*"): {
        this.result.set(+this.operand_a * +this.operand_b);
        break;
      }
      case ("/"): {
        this.result.set(+this.operand_a / +this.operand_b);
        break;
      }
    }
  }
}
