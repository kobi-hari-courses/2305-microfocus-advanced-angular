import { NgModule } from '@angular/core';
import { FAVORITE_COLOR } from './tokens/color.token';
import { LOGGER } from './tokens/logger.token';

@NgModule({
    providers: [
        {
            provide: FAVORITE_COLOR, 
            useValue: 'magenta', 
            multi: true
        }, 
        {
            provide: LOGGER, 
            useValue: async (str: string) => {
                await new Promise(res => setTimeout(res, 3000));
                console.warn('Delayed ', str);
            }, 
            multi: true
        }
    ]
})
export class SecondModule {}