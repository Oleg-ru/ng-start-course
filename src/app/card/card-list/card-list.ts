import { Component } from '@angular/core';
import {Card} from '../types/card';
import {ActivatedRoute, Router} from '@angular/router';
import {cards} from '../data';

@Component({
  selector: 'app-card-list',
  imports: [],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {
  constructor(private router: Router, private route: ActivatedRoute) {
  }

  protected readonly cards = cards;
  showDetails = (id: string) => {
    this.router.navigate([`${id}`], {relativeTo: this.route})
  }
}
