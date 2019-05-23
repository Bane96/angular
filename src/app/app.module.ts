import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DodajZgraduComponent } from './dodaj-zgradu/dodaj-zgradu.component';
import { DodajNekretninuComponent } from './dodaj-nekretninu/dodaj-nekretninu.component';
import { DodajKorisnikaComponent } from './dodaj-korisnika/dodaj-korisnika.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DodajZgraduComponent,
    DodajNekretninuComponent,
    DodajKorisnikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
