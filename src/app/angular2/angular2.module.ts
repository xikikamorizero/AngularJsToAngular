import { NgModule } from '@angular/core';
import { Angular2Component } from './angular2.component';
import { AngularJsDirective } from '../angularJs/angularJs.directive';

@NgModule({
  declarations: [Angular2Component, AngularJsDirective],
  imports: [], 
  providers: [],
  bootstrap: [Angular2Component],
})
export class Angular2Module {
  
}
