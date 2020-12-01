import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherdataComponent } from './weatherdata/weatherdata.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherdataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [WeatherdataComponent]
})
export class AppModule { }
