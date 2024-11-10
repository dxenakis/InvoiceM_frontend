import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse  } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginUserDto } from '../models/login-user-dto';
import { RegisterUserDto } from '../models/register-user-dto';
import { Observable , throwError} from 'rxjs';
import { tap } from 'rxjs/operators';
import { SysParamsService } from '../shared/services/sys-params.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/auth'; // Update with your backend URL

  constructor(private http: HttpClient, private router: Router,private sysParamsService: SysParamsService) {}



  login(data: LoginUserDto): Observable<any> {
   // console.warn(data);
    return this.http.post(`${this.apiUrl}/login`, data).pipe(
      tap((response: any) => {        
        this.sysParamsService.setCompanyName(response.company.name)
        this.sysParamsService.setUserName(response.user.fullName)
        localStorage.setItem('authToken', response.token); // Store token in localStorage
      })
    );
  }

  register(data: RegisterUserDto): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, data);
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Remove token on logout
    sessionStorage.clear(); // Clear all sessionStorage on logout
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      // Unauthorized error: this can be displayed to the user
      return throwError(() => new Error('Invalid username or password'));
    } else {
      // Other errors
      return throwError(() => new Error('An error occurred; please try again later.'));
    }
  }


}
