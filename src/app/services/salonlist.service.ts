import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalonService {
  private apiUrl = `${environment.apiUrl}/Salon/getAllSalon`; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getSalons(service: string, address: string): Observable<any[]> {
    const authToken = sessionStorage.getItem('authenticationToken'); // Get JWT token

    // Set headers with Authorization token
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
    });

    // Perform the GET request with query parameters and headers
    return this.http.get<any[]>(this.apiUrl, {
      headers,
      params: { service, address },
    });
  }
}
