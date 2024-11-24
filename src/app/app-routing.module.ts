import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpencvComponent } from './opencv/opencv.component';

const routes: Routes = [
  { path: 'opencv', component: OpencvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
