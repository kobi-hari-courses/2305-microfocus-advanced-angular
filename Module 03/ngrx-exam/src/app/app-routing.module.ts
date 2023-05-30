import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentQuestionPresenterComponent } from './components/current-question-presenter/current-question-presenter.component';

const routes: Routes = [
  {path: '', redirectTo: 'answer', pathMatch: 'full'},
  {path: 'answer', component: CurrentQuestionPresenterComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
