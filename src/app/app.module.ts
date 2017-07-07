import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';

import { AppComponent } from './app.component';
import { LoggerToken, logger, Logger, loggerFactory } from './logger.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LoggerToken, useValue: logger }
    // { provide: LoggerToken, useFactory: loggerFactory }
    // { provide: LoggerToken, useValue: Logger }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
