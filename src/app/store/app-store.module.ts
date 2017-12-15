import { CounterEffects } from './effects/counter.effects';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from '../store/reducers/counter.reducer';


@NgModule({
    imports: [
        StoreModule.forRoot({counterReducer}),
        EffectsModule.forRoot([
            CounterEffects
        ])
    ]
})
export class AppStoreModule { }
