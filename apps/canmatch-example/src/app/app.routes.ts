import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('libs/canmatch-example/feature-main/src/lib/lib.routes').then(
        (routes) => routes.canmatchExampleFeatureMainRoutes
      ),
  },
];
