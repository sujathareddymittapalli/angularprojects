import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonComponent } from './amazon/amazon.component';
import { Amazon2Component } from './amazon2/amazon2.component';
import { HimalayaComponent } from './himalaya/himalaya.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonComponent,
    Amazon2Component,
    HimalayaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
