// src/app/app.config.ts
import { importProvidersFrom } from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpClientModule }     from '@angular/common/http';
import { FormsModule,
  ReactiveFormsModule }  from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

export const appConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule
    )
  ]
};
