import { InjectionToken } from '@angular/core';
import { ILogger} from './interfaces';

// export const logger = {
//   error() {
//     console.log('error');
//   },
//   warning() {
//     console.warn('warning');
//   }
// };

export function error() { console.log('error'); }
export function warning() { console.log('warning'); }
export const logger = { error, warning };

export class Logger {
  static error() {
    console.log('error');
  }

  static warning() {
    console.warn('warning');
  }
}

export function loggerFactory() {
  return {
    error() {
      console.log('error');
    },
    warning() {
      console.warn('warning');
    }
  };
}

export const LoggerToken = new InjectionToken<ILogger>('app.logger');
