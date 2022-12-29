import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MarkerService } from './marker.service';
import { HttpClientModule } from '@angular/common/http';
import { PopUpService } from './popup.service';
import { CupdetailsModule } from './modules/cupdetails/cupdetails.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    CupdetailsModule
  ],
  providers: [
    MarkerService,PopUpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
