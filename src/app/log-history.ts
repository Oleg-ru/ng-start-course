import { Injectable } from '@angular/core';
import {History} from './shared/types/History';

@Injectable({
  providedIn: 'root',
})
export class LogHistory {
  private history: History[] = [{id: "1", expressionValue: "1 + 1 = 2"}];
  public getAllHistory = () => {
    return this.history;
  }
  addHistory = (operand_a: string, operand_b: string, operation: string, result: number) => {
    this.history.push({
      id: crypto.randomUUID(),
      expressionValue: `${operand_a} ${operation} ${operand_b} = ${result}`
    });
  }
}
