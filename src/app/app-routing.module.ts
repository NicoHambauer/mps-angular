import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { FirstSectionComponent } from '../app/components/sections/first-section/first-section.component';
import { SecondSectionComponent } from '../app/components/sections/second-section/second-section.component';
import { ThirdSectionComponent } from '../app/components/sections/third-section/third-section.component';
import { HomeComponent } from '../app/components/sections/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}, 
  { path: 'navbar', component: NavbarComponent },
  { path: 'first-section', component: FirstSectionComponent},
  { path: 'second-section', component: SecondSectionComponent},
  { path: 'third-section', component: ThirdSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
