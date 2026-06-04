import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [
    FormsModule
  ],
  templateUrl: './app-calculator.html',
  styleUrl: './app-calculator.css',
})
export class AppCalculator {
  public operand_a = 0;
  public operand_b = 0;
  public operations = ["+", "-", "*", "/"]
  public operation? = "+"
  public result = signal(0);
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
