import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent {
  @Input() title!: string;
  @Output() changeTitle = new EventEmitter<string>();
  constructor() {}

  onChangeC() {
    this.changeTitle.emit('Change');
  }
}
