import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';
import { UnivAddComponent } from './components/univ-add/univ-add.component';
import { UniversityComponent } from './components/university/university.component';

const routes: Routes = [
  {
    path:"login" ,
    component: LoginComponent , 
  },
  {
    path:"register" ,
    component: RegisterComponent , 
  },
  {
    path:"dashboard" ,
    component: DashboardComponent , 
  },
  {
    path:"university" ,
    component: UniversityComponent , 
  }
  ,
  {
    path:"adduniv" ,
    component: UnivAddComponent , 
  },
  
  {
    path:"home" ,
    component: HomeComponent , 
  },

// 404
{
path:"**" ,
component:Page404Component
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
