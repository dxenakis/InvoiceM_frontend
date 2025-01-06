import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [ContentComponent, HeaderComponent, SidebarComponent, FooterComponent,CommonModule], 
})
export class DashboardComponent {
  constructor(private router: Router) {}


  logout() {
    // Here you would clear any authentication data
    // For example, if using localStorage for auth tokens:
    sessionStorage.removeItem('authenticationToken') ; // Remove token on logout
    sessionStorage.clear(); // Clear all sessionStorage on logout
    
    // You could also show a logout confirmation message or redirect the user
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

}