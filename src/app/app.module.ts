import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApodComponent } from './apod/apod.component';

import { LandingComponent } from './landing/landing.component';
import { NasaService } from './services/nasa.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
