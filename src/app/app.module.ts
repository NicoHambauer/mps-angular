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
import { LoginComponent } from './pages/login/login.component';
import { TrackerComponent } from './pages/tracker/tracker.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GraphComponent } from './components/graph/graph.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';
import { ClimaFactsComponent } from './pages/clima-facts/clima-facts.component';
import { ReduceFootprintComponent } from './pages/reduce-footprint/reduce-footprint.component';
import { HypothesisComponent } from './pages/hypothesis/hypothesis.component';
import { VisionComponent } from './pages/vision/vision.component';
import { AddButtonComponent } from './components/add-button/add-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginButtonComponent,
    LoginComponent,
    TrackerComponent,
    NavbarComponent,
    GraphComponent,
    HomeComponent,
    TableComponent,
    ClimaFactsComponent,
    ReduceFootprintComponent,
    HypothesisComponent,
    VisionComponent,
    AddButtonComponent
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
