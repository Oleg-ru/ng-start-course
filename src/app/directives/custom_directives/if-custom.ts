import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIfCustom]',
})
export class IfCustom {
  private _show = false;
  @Input() set appIfCustom(show: boolean) {
    this._show = show;
    this.displayTemplate()
  }
  constructor(
    private vcr: ViewContainerRef,
    private templateRef: TemplateRef<unknown>
  ) {}
  ngOnInit() {
    this.displayTemplate();
  }

  private displayTemplate() {
    this.vcr.clear();
    if (this._show) {
      this.vcr.createEmbeddedView(this.templateRef)
    }
  }
}
