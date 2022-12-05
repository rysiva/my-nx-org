import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'my-nx-org-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'canmatch-example';
}
