import { Routes } from '@angular/router';
import {AppCalculator} from './calculator/app-calculator/app-calculator';
import {NotFound404} from './not-found-404/not-found-404';
import {Directives} from './directives/directives';

export const routes: Routes = [
    {
      path: "calculator",
      component: AppCalculator
    },
  {
    path: "cards",
    loadChildren: () => import("./card/card.routes").then(m => m.routes)
  },
  {
    path: "directives",
    component: Directives
  },
  {
    path: "**",
    component: NotFound404
  },
];
