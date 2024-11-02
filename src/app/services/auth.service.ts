import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginUserDto } from '../models/login-user-dto';
import { RegisterUserDto } from '../models/register-user-dto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // Update with your backend URL

  constructor(private http: HttpClient, private router: Router) {}

  login(data: LoginUserDto): Observable<any> {
    console.warn(data);
    return this.http.post(`${this.apiUrl}/login`, data).pipe(
      tap((response: any) => {
        localStorage.setItem('authToken', response.token); // Store token in localStorage
      })
    );
  }

  register(data: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Remove token on logout
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
