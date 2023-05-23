import { InjectionToken } from "@angular/core";

export type LoggerFunction = (txt: string) => void | Promise<void>;

export const LOGGER = new InjectionToken<LoggerFunction[]>('LOGGER');