import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AngularComponent } from './angular.component';
import { AngularJsDirective } from '../angularJs/angularJs.directive';

@NgModule({
  declarations: [AngularComponent],
  imports: [], 
  providers: [],
  bootstrap: [AngularComponent],
})
export class AngularModule {}
