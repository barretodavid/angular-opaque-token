import { InjectionToken } from '@angular/core';
import { ILogger} from './interfaces';

export function error() {
  console.log('error');
}

export function warning() {
  console.warn('warning');
}

export const logger = { error, warning };

export const LoggerToken = new InjectionToken<ILogger>('app.logger');
