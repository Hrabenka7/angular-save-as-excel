import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ExcelService } from './services/excel.service'; 
//import { HelloComponent} from './hello.component'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
