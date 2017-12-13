import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'details/:id', component: TodoDetailsComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule {}
