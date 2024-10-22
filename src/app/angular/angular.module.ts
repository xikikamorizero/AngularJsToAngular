import {NgModule } from '@angular/core';
import { AngularComponent } from './angular.component';
import { DataService } from '../angularJs/angularJs.service';


@NgModule({
  declarations: [AngularComponent],
  imports: [], 
  providers: [DataService],
  bootstrap: [AngularComponent],
})
export class AngularModule {}
