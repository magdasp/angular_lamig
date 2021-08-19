import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMenuComponent } from './app-body/app-menu/app-menu.component';
import { Task1Component } from './app-body/task1/task1.component';
import { Task2Component } from './app-body/task2/task2.component';
import { Task3Component } from './app-body/task3/task3.component';
import { Task4Component } from './app-body/task4/task4.component';
import { RouterModule, Routes } from '@angular/router';
import { AphorismComponent } from './app-body/aphorism/aphorism.component';
import { Task5Component } from './app-body/task5/task5.component'; 

const routes: Routes = [
  {
    path: "", redirectTo: '/task1', pathMatch: 'full'
  },
  {
    path: 'task1',
    component: Task1Component
  },
  {
    path: 'task2',
    component: Task2Component
  },
  {
    path: 'task3',
    component: Task3Component
  },
  {
    path: 'task4',
    component: Task4Component
  },
  {
    path: 'task5',
    component: Task5Component
  },
  {
    path: 'aphorism',
    component: AphorismComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AppBodyComponent,
    AppHeaderComponent,
    AppMenuComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task5Component,
    AphorismComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
