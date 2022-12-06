import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  // Default change detection strategy
})
export class OneComponent {
  newLastName = 'changed by OneComponent';
  newAge = 23;

  constructor(public service: AppService) {
    setTimeout(() => (service.lastName = this.newLastName), 2000);
    setInterval(() => (service.age = this.newAge), 1000);
  }
}
