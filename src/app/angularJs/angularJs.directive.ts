import { Directive, ElementRef, Injector, Input, Output, EventEmitter } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  selector: 'angularjs-detail',
})
export class AngularJsDirective extends UpgradeComponent {
  @Input() value: string;
  @Output() change:EventEmitter<string>;
  constructor(elementRef: ElementRef, injector: Injector) {
    super('angularJs', elementRef, injector);
  }
}
