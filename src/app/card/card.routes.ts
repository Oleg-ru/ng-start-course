import { Routes } from '@angular/router';
import {CardList} from './card-list/card-list';
import {CardDetails} from './card-details/card-details';

export const routes: Routes = [
  {
    path: "",
    component: CardList
  },
  {
    path: ":id",
    component: CardDetails
  },
];
