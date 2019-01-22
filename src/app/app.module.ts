import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
