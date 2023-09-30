import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { CopyToClipboardDirective } from './copy-to-clipboard.directive'


@NgModule({
  declarations: [
    AppComponent,
    CopyToClipboardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
