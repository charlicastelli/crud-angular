import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Verifica se o caminho está vazio e redireciona para componente courses
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  // Caminho courses
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
