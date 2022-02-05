import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';

import {StoreService} from "./store.service";

@NgModule({
  declarations: [
    AppComponent,
    ValidationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
