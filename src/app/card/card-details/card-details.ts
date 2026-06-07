import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {cards} from '../data';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-card-details',
  imports: [],
  templateUrl: './card-details.html',
  styleUrl: './card-details.css',
})
export class CardDetails {
  private route = inject(ActivatedRoute);

  // Создаем signal из params (автоматически обновляется)
  params = toSignal(this.route.params, {initialValue: {} as Params});

  // Используем в коде
  card = computed(() => {
    const id = this.params()['id'];
    return cards.find(c => c.id === id);
  });

  // Получаем текущее значение (для шаблона)
  currentCard = this.card();
}
