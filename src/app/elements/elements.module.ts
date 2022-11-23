import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    NavbarComponent,
    AboutComponent
  ]
})
export class ElementsModule { }
