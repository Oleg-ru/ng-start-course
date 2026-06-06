import {Component, inject} from '@angular/core';
import {LogHistory} from '../../log-history';

@Component({
  selector: 'app-history',
  imports: [],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {
  historyService = inject(LogHistory);
  stories = this.historyService.getAllHistory();
  clearHistory = () => {
    this.historyService.clearHistory();
  }
}
