import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ContactComponent} from "./contact/contact.component";
import {PhoneComponent} from "./phone/phone.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
