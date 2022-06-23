import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewfuctionComponent } from './newfuction/newfuction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewfuctionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, RouterModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
