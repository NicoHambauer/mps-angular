import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { FirstSectionComponent } from '../app/components/sections/first-section/first-section.component';
import { SecondSectionComponent } from '../app/components/sections/second-section/second-section.component';
import { HomeComponent } from '../app/components/sections/home/home.component';
import { ClimaFactsComponent } from '../app/components/sections/clima-facts/clima-facts.component';
import { ReduceC02Component } from '../app/components/sections/reduce-c02/reduce-c02.component';
import { HypothesisComponent } from '../app/components/sections/hypothesis/hypothesis.component';
import { VisionComponent } from '../app/components/sections/vision/vision.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'navbar', component: NavbarComponent },
  { path: 'first-section', component: FirstSectionComponent},
  { path: 'second-section', component: SecondSectionComponent},
  { path: 'clima-facts', component: ClimaFactsComponent},
  { path: 'reduce-c02', component: ReduceC02Component},
  { path: 'hypothesis', component: HypothesisComponent},
  { path: 'vision', component: VisionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
