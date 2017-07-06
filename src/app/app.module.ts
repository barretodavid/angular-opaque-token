import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerToken, logger } from './logger.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LoggerToken, useValue: logger }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
