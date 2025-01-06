import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HeaderComponent } from "../landingpage/header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SalonService } from '../services/salon.service';

@Component({
  selector: 'app-salons',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CommonModule,FormsModule],
  templateUrl: './salons.component.html',
  styleUrl: './salons.component.css'
})

export class SalonsComponent implements OnInit {
  service: string = '';
  address: string = '';
  salons: any[] = []; // Array to store salon data
  isLoading: boolean = true; // For loader or progress indicator
  errorMessage: string = ''; // For displaying errors
  private apiUrl = environment.apiUrl+'/Salon'; // Update with your backend URL
  constructor(private route: ActivatedRoute, private http: HttpClient, private salonService: SalonService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    // Extract query parameters
    this.route.queryParams.subscribe((params) => {
      this.service = params['service'] || '';
      this.address = params['address'] || '';

      // Fetch salons from the backend
      this.fetchSalons();
    });
  }

  fetchSalons() {
    this.isLoading = true;
    this.errorMessage = '';

    this.salonService.getSalons(this.service, this.address).subscribe({
      next: (data) => {
        this.salons = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'An error occurred while fetching salons.';
        this.isLoading = false;
      },
    });
  }


  viewSalonDetails(salonId: number): void {
    // Navigate to the salon list with query parameters
    this.router.navigate(['/salondetails', salonId]);
  }


}