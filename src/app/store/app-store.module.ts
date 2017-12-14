import { CounterEffects } from './effects/counter.effects';
import { reducer } from './reducers/reducer';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
    imports: [
        StoreModule.forRoot(reducer),
        EffectsModule.forRoot([
            CounterEffects
        ])
    ]
})
export class AppStoreModule { }
