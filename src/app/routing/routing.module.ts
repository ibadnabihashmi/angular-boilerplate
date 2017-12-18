import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AuthComponent } from '../components/auth/auth.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'signin', component: AuthComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule {}
