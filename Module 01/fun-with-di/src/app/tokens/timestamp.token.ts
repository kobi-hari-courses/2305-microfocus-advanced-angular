import { InjectionToken } from '@angular/core';
export const TIMESTAMP = new InjectionToken<() =>Date>('TIMESTAMP');