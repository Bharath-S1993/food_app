import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CssLearningComponent } from './css/css-learning/css-learning.component';

const routes: Routes = [{
  path: 'css',
  component: CssLearningComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
