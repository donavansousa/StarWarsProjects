import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultComponent } from './result/result.component';
import {ResultService} from './Services/result.service';
import { HttpModule,JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';
import { MatInputModule, MatTableModule,MatAutocompleteModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule,
    CommonModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatInputModule, 
    MatTableModule,
    MatAutocompleteModule
  ],
  exports:[
    MatTableModule,
  ],
  providers: [ResultService],
  bootstrap: [AppComponent],

})
export class AppModule { }
