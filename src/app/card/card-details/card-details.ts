import { Component } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Card} from '../types/card';
import {cards} from '../data';

@Component({
  selector: 'app-card-details',
  imports: [],
  templateUrl: './card-details.html',
  styleUrl: './card-details.css',
})
export class CardDetails {
  public card?: Card

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.card = cards.find(card => card.id === params['id'])
    })
  }
}
