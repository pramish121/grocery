import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { RoomateComponent } from './roomate/roomate.component';
import { passwordService } from './services/passwordService';

@NgModule({
  declarations: [
    AppComponent,
    RoomateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [passwordService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
