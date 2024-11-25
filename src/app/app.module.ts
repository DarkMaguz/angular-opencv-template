import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpencvComponent } from './opencv/opencv.component';
import { OpencvModule } from './opencv.module';

@NgModule({
  declarations: [
    AppComponent,
    OpencvComponent
  ],
  imports: [
    OpencvModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
