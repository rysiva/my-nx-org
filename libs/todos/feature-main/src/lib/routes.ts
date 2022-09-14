import { Routes } from "@angular/router";
import { TodosFeatureMainComponent } from "./todos-feature-main/todos-feature-main.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TodosFeatureMainComponent,
  },
];
