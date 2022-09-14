import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        {
          path: '',
          loadChildren: () =>
            import('@my-nx-org/todos/feature-main').then(
              lib => lib.routes
            )
        }
      ], { initialNavigation: 'enabledBlocking' })
    ),
  ],
}).catch((err) => console.error(err));
