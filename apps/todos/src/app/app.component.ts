import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'todos-root',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'todos';
}
