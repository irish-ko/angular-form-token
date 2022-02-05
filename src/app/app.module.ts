import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { ValidationFormComponent } from './validation-form/validation-form.component';

import {StoreService} from "./store.service";
import { ShowDraftComponent } from './show-draft/show-draft.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationFormComponent,
    ShowDraftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
