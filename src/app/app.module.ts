import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxTagsModule } from 'ngx-tags';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule , NgxTagsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
