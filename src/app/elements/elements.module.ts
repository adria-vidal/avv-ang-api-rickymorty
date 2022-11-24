import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CharactersComponent,
    DetailsComponent,
  ],
  imports: [CommonModule],
  exports: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CharactersComponent,
    DetailsComponent
  ],
})
export class ElementsModule {

}
