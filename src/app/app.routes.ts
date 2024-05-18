import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path: 'make',
  loadComponent: () => import ('./components/make-quiz/make-quiz.component').then ( m=> m.MakeQuizComponent),
},
];
