import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalonService } from '../services/salon.service';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from "../landingpage/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Salon {
  id: number;
  name: string;
  address: string;
  service: string;
  rating: number;
  description: string;
}

@Component({
  selector: 'app-salon-details',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './salondetails.component.html',
  styleUrls: ['./salondetails.component.css']
})
export class SalonDetailsComponent implements OnInit {
  salonId: number | null = null;
  salonDetails: Salon | null = null;
  isLoading = true;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private salonService: SalonService) {}

  ngOnInit(): void {
    // Get salon ID from the route parameters
    const salonId = this.route.snapshot.paramMap.get('salonId');
    
    // Check if the salonId is a valid number
    if (salonId) {
      this.salonId = +salonId; // Convert to a number
      this.fetchSalonDetails(this.salonId);
    } else {
      this.errorMessage = 'Invalid salon ID.';
      this.isLoading = false;
    }
  }

  fetchSalonDetails(salonId: number): void {
    this.salonService.getSalon(salonId).subscribe({
      next: (response) => {
        this.salonDetails = response;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to fetch salon details.';
        this.isLoading = false;
      }
    });
  }
}