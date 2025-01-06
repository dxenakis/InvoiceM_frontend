import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from "../landingpage/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [FooterComponent, HeaderComponent,CommonModule,FormsModule],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})

export class LandingpageComponent {
  service: string = '';
  address: string = '';

  constructor(private router: Router) {}

  searchSalons() {
    // Navigate to the salon list with query parameters
    this.router.navigate(['/salons'], {
      queryParams: {
        service: this.service,
        address: this.address
      }
    });
  }
}

