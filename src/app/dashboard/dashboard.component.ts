import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [ContentComponent, HeaderComponent, SidebarComponent, FooterComponent], 
})
export class DashboardComponent {
  constructor(private router: Router) {}
  logout() {
    // Here you would clear any authentication data
    // For example, if using localStorage for auth tokens:
    localStorage.removeItem('authToken');
    
    // You could also show a logout confirmation message or redirect the user
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

}