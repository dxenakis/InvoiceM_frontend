import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Salon } from '../models/salon.model';

@Injectable({
  providedIn: 'root',
})
export class SalonService {

  private apiUrl = environment.apiUrl + '/Salon'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // For the salon list (getting an array of salons)
  getSalons(service: string, address: string): Observable<Salon[]> {
    
    const authToken = sessionStorage.getItem('authenticationtoken'); // Get JWT token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.get<Salon[]>(this.apiUrl+'/getAllSalon', {
      
      params: { service, address },
    });
  }

  // For a single salon (getting details of one salon)
  getSalon(salonId: number): Observable<Salon> {
    const authToken = sessionStorage.getItem('authenticationtoken'); // Get JWT token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    return this.http.get<Salon>(`${this.apiUrl}/getSalon?id=${salonId}`);
  }
}
