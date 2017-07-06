import { InjectionToken } from '@angular/core';
import { ILogger} from './interfaces';

export const logger = {
  error() {
    console.log('error');
  },
  warning() {
    console.warn('warning');
  }
};

export const LoggerToken = new InjectionToken<ILogger>('app.logger');
