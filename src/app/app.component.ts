import { Component, Inject } from '@angular/core';
import { LoggerToken } from './logger.token';
import { ILogger } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject(LoggerToken) logger: ILogger) {
    logger.error();
  }
}
