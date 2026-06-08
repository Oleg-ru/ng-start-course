import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-children',
  imports: [],
  templateUrl: './children.html',
  styleUrl: './children.css',
})
export class Children {
  @Input() title?: string;
  @Output() eventChangeChildren = new EventEmitter<string>()
  public templateTitle?: string;

  ngOnInit() {
    this.templateTitle = this.title;
    console.log(this.templateTitle);
  }

  handleClick() {
    this.templateTitle = 'А ребенку весело)))';
    this.eventChangeChildren.emit(this.templateTitle);
  }
}
