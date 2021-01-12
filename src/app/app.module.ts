import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';

//Bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { FirstSectionComponent } from './components/sections/first-section/first-section.component';
import { SecondSectionComponent } from './components/sections/second-section/second-section.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphComponent } from './components/graph/graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/sections/home/home.component';
import { TableComponent } from './components/table/table.component';
import { ClimaFactsComponent } from './components/sections/clima-facts/clima-facts.component';
import { ReduceC02Component } from './components/sections/reduce-c02/reduce-c02.component';
import { HypothesisComponent } from './components/sections/hypothesis/hypothesis.component';
import { VisionComponent } from './components/sections/vision/vision.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginButtonComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    NavbarComponent,
    GraphComponent,
    HomeComponent,
    TableComponent,
    ClimaFactsComponent,
    ReduceC02Component,
    HypothesisComponent,
    VisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
