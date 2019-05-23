import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DodajKorisnikaComponent} from './dodaj-korisnika/dodaj-korisnika.component';
import {DodajNekretninuComponent} from './dodaj-nekretninu/dodaj-nekretninu.component';
import {DodajZgraduComponent} from './dodaj-zgradu/dodaj-zgradu.component';



const routes: Routes = [
  { path: 'dodaj-korisnika', component: DodajKorisnikaComponent },
  { path: 'dodaj-nekretninu', component: DodajNekretninuComponent },
  { path: 'dodaj-zgradu', component: DodajZgraduComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
