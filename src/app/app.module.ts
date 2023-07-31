import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FileUploadFormComponent } from './file-upload-form/file-upload-form.component';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

@NgModule({
  declarations: [AppComponent, FileUploadFormComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule], // Add AppRoutingModule
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
