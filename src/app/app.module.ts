import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RoutingModule } from './routing/routing.module';
import { CounterService } from './services/counter.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './store/effects/counter.effects';
import { AppStoreModule } from './store/app-store.module';
import { AuthComponent } from './components/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    AppStoreModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
