import { Component } from '@angular/core';

@Component({
  selector: 'app-angular2',
  templateUrl: './angular2.component.html',
  styleUrls: [],
})
export class Angular2Component {
  title: string = 'AngularJs -> Angular';
  onChangeC(value: string) {
    this.title = value;
  }
  constructor() {}
}
