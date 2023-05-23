import { NgModule } from '@angular/core';
import { FAVORITE_COLOR } from './tokens/color.token';
import { LOGGER } from './tokens/logger.token';

@NgModule({
    providers: [
        {
            provide: FAVORITE_COLOR, 
            useValue: 'blue', 
            multi: true
        }, 
        {
            provide: LOGGER, 
            useValue: (str: string) => console.log(str), 
            multi: true
        }
    ]
})
export class FirstModule {}