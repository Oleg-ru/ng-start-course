import { Injectable } from '@angular/core';
import {History} from './shared/types/History';

@Injectable({
  providedIn: 'root',
})
export class LogHistory {
  private history: History[] = [];
  public getAllHistory = () => {
    return this.history;
  }
  addHistory = (operand_a: number, operand_b: number, operation: string, result: number) => {
    this.history.push({
      id: crypto.randomUUID(),
      expressionValue: `${operand_a} ${operation} ${operand_b} = ${result}`
    });
  }
}
