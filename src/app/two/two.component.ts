import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  // Even works with OnPush but needs all parent components to use OnPush to work properly.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoComponent {
  newLastName = 'changed by TwoComponent';

  constructor(public service: AppService) {
    setTimeout(() => (service.lastName = this.newLastName), 3000);
  }
}
