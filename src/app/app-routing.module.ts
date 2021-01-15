import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { LoginComponent } from './components/sections/login/login.component';
import { TrackerComponent } from './components/sections/tracker/tracker.component';
import { HomeComponent } from './components/sections/home/home.component';
import { ClimaFactsComponent } from '../app/components/sections/clima-facts/clima-facts.component';
import { ReduceC02Component } from '../app/components/sections/reduce-c02/reduce-c02.component';
import { HypothesisComponent } from '../app/components/sections/hypothesis/hypothesis.component';
import { VisionComponent } from '../app/components/sections/vision/vision.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'navbar', component: NavbarComponent },
  { path: 'first-section', component: LoginComponent},
  { path: 'tracker', component: TrackerComponent},
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
