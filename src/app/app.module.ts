import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UniversityComponent } from './components/university/university.component';
import { UnivAddComponent } from './components/univ-add/univ-add.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { Page404Component } from './components/page404/page404.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SidebarComponent,
    UniversityComponent,
    UnivAddComponent,
    TopbarComponent,
    Page404Component,
    HomeComponent,
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , 
    ReactiveFormsModule , 
    FormsModule ,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
