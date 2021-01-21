import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { HomeComponent } from './pages/home/home.component';
import { ClimaFactsComponent } from './pages/clima-facts/clima-facts.component';
import { ReduceC02Component } from './pages/reduce-c02/reduce-c02.component';
import { HypothesisComponent } from './pages/hypothesis/hypothesis.component';
import { VisionComponent } from './pages/vision/vision.component';
//import {TextFieldModule} from '@angular/cdk/text-field';


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
