import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthGuard } from './auth/auth.guard';
import { SalonsComponent } from './salons/salons.component';
import { SalonDetailsComponent } from './salondetails/salondetails.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'salons', component: SalonsComponent },
  { path: 'salondetails/:salonId', component: SalonDetailsComponent },
  { path: 'dashboard',component: DashboardComponent,canActivate: [AuthGuard],  },// Protect the dashboard route 
  { path: '**', redirectTo: 'landingpage' }, // Fallback route
];
