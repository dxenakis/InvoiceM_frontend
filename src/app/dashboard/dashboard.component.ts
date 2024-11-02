import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html', 
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


