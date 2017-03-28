import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { HumanComponent } from './human.component';
import { HumanDetailsComponent } from './human-details.component';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, HumanComponent, HumanDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
