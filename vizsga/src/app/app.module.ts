

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Hozzáadtuk az FormsModule importot

import { AppComponent } from './app.component';
import { FeladatComponent } from './feladat/feladat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    FeladatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
