import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { DataService } from '../angularJs/angularJs.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent {
  @Input() title!: string;
  @Output() changeTitle = new EventEmitter<string>();
  constructor(private dataService:DataService) {
    console.log(this.dataService.getData())
  }


  onChangeC() {
    this.changeTitle.emit('Change');
  }
}
