import { Injectable } from '@angular/core';

@Injectable()
export class AngularDataService {
  constructor() {
  }

  getData(): string {
    return 'Данные из Angular сервиса';
  }
}
