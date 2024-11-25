import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sample1Component } from './sample1/sample1.component';

const routes: Routes = [
  { path: 'sample1', component: Sample1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
