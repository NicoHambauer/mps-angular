import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { FirstSectionComponent } from '../app/components/sections/first-section/first-section.component';
import { SecondSectionComponent } from '../app/components/sections/second-section/second-section.component';
import { HomeComponent } from '../app/components/sections/home/home.component';
import { ClimaFactsComponent } from '../app/components/sections/clima-facts/clima-facts.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'navbar', component: NavbarComponent },
  { path: 'first-section', component: FirstSectionComponent},
  { path: 'second-section', component: SecondSectionComponent},
  { path: 'clima-facts', component: ClimaFactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
