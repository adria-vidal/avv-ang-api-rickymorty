import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './elements/about/about.component';
import { CharactersComponent } from './elements/characters/characters.component';
import { DetailsComponent } from './elements/details/details.component';
import { HomeComponent } from './elements/home/home.component';
import { NavbarComponent } from './elements/navbar/navbar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  {
    path: 'details',
    component: DetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
