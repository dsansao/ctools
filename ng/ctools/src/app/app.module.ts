import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 declarations: [    
 ],
 imports: [
 BrowserModule,
 CommonModule,
 HttpClientModule,
 AppComponent
 ],
 providers: [HttpClientModule],
 bootstrap: []
})
export class AppModule { }
