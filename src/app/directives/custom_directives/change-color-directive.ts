import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appChangeColorDirective]',
})
export class ChangeColorDirective {
  @Input('appChangeColorDirective') colors?: Array<String>
  private readonly _el: ElementRef;

  constructor(el: ElementRef) {
    this._el = el;
  }

  ngAfterViewInit() {
    this.changeColor(this._el)
  }

  // colors = ['red', 'green', 'blue'];
  private changeColor = (el: ElementRef) => {
    setInterval(() => {
      if (this.colors && this.colors.length !== 0) {
        el.nativeElement.style.color = this.colors[Math.floor(Math.random() * this.colors.length)]
      }
    }, 1000)
  }
}
