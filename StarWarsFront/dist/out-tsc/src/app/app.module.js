import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { ResultService } from './Services/result.service';
import { HttpModule, JsonpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { routing } from './app.routing';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatAutocompleteModule } from "@angular/material";
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
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
            BrowserModule,
            BrowserAnimationsModule,
            MatInputModule,
            MatPaginatorModule,
            MatProgressSpinnerModule,
            MatSortModule,
            MatTableModule,
            MatAutocompleteModule
        ],
        providers: [ResultService],
        bootstrap: [AppComponent],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map