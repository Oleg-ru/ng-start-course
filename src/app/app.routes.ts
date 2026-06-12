import { Routes } from '@angular/router';
import {AppCalculator} from './calculator/app-calculator/app-calculator';
import {NotFound404} from './not-found-404/not-found-404';
import {Directives} from './directives/directives';
import {Parent} from './live-cycle/parent/parent';
import {PostList} from './posts/post-list/post-list';
import {Form} from './form/form';
import {NgTemplateAndContainer} from './template-and-container/template-and-container';

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
    path: "live-cycle",
    component: Parent
  },
  {
    path: "posts",
    component: PostList
  },
  {
    path: "form",
    component: Form
  },
  {
    path: "ng-template-container",
    component: NgTemplateAndContainer
  },
  {
    path: "**",
    component: NotFound404
  },
];
