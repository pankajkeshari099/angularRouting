import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'about',component:AboutComponent},
    {path:'login',component:LoginComponent},
    {path:'registration',component:RegistrationComponent},  
    {path:'',component:HomeComponent},
    {path:'**',component:PageNotFoundComponent}
];
