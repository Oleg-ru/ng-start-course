import { Component } from '@angular/core';
import {Card} from '../types/card';

@Component({
  selector: 'app-card-list',
  imports: [],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {
  protected readonly cards = cards;
  showDetails = (id: string) => {
  }
}

export const cards: Array<Card> = [
  {
    id: 'prod_001',
    title: 'iPhone 15 Pro Max 256GB',
    content: 'Титан, натуральный титан, 48 МП камера, Dynamic Island, USB-C, батарея на 30 часов'
  },
  {
    id: 'prod_002',
    title: 'Samsung Galaxy S24 Ultra',
    content: 'S Pen, AI-функции, 200 МП камера, 5000 мАч, экран 6.8" Dynamic AMOLED'
  },
  {
    id: 'prod_003',
    title: 'MacBook Air M3 13"',
    content: '8‑ядерный CPU, 10‑ядерный GPU, 16 ГБ RAM, SSD 512 ГБ, батарея до 18 часов'
  },
  {
    id: 'prod_004',
    title: 'Наушники Sony WH-1000XM5',
    content: 'Шумоподавление премиум-класса, 30 часов работы, быстрая зарядка, LDAC'
  },
  {
    id: 'prod_005',
    title: 'Робот-пылесос Xiaomi S20',
    content: 'Лазерная навигация, 4000 Па всасывания, 150 мин работы, управление с телефона'
  },
  {
    id: 'prod_006',
    title: 'Футболка хлопковая черная',
    content: '100% хлопок, принт спереди, размеры S-XXL, машинная стирка, премиум качество'
  },
  {
    id: 'prod_007',
    title: 'Кроссовки Nike Air Max',
    content: 'Воздушная подушка, дышащая сетка, амортизация, подошва на любой поверхности'
  },
  {
    id: 'prod_008',
    title: 'Кофематура DeLonghi EC685',
    content: '15 бар давление, система быстрого нагрева, капучинатор, съёмный поддон, цвет черный'
  },
  {
    id: 'prod_009',
    title: 'PlayStation 5 Slim',
    content: 'SSD 1 ТБ, беспроводной контроллер DualSense, поддержка 8K, обратная совместимость'
  },
  {
    id: 'prod_010',
    title: 'Умная колонка Яндекс Станция 2',
    content: 'Алиса в подарок, 30 Вт звук, Zigbee, управление домом, голосовое управление'
  }
];
