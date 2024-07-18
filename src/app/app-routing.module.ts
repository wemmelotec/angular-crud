import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//arquivo de rotas globais
const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'courses'},
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(mod => mod.CoursesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
