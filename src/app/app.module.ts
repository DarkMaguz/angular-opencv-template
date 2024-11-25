import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpencvModule } from './opencv.module';
import { Sample1Component } from './sample1/sample1.component';

@NgModule({
  declarations: [
    AppComponent,
    Sample1Component
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
