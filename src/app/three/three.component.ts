import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThreeComponent {
  constructor(public service: AppService) {}

  changeAge(event: Event) {
    const age = (event as any).target.value as number;

    if (!isNaN(age)) {
      this.service.age = age;
    }
  }
}
