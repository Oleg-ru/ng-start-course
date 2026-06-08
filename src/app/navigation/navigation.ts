import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  routes: Array<{url: string; urlName: string}> = [
    {
      url: "calculator",
      urlName: "Калькулятор"
    },
    {
      url: "cards",
      urlName: "Товары"
    },
    {
      url: "directives",
      urlName: "Директивы"
    },
    {
      url: "live-cycle",
      urlName: "Жизненный цикл"
    },
    {
      url: "posts",
      urlName: "Посты"
    },
  ]
}
