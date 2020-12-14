import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import { FirstSectionComponent } from '../app/components/sections/first-section/first-section.component';
import { SecondSectionComponent } from '../app/components/sections/second-section/second-section.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'first-section', component: FirstSectionComponent},
  { path: 'second-section', component: SecondSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
