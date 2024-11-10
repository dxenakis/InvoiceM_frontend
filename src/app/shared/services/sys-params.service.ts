import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SysParamsService {
  // Initialize with values from sessionStorage or default values if not present
  private userNameSource = new BehaviorSubject<string>(sessionStorage.getItem('userName') || 'User');
  private companyNameSource = new BehaviorSubject<string>(sessionStorage.getItem('companyName') || 'Company');

  // Observables for each parameter
  userName$ = this.userNameSource.asObservable();
  companyName$ = this.companyNameSource.asObservable();

  constructor() {}

  // Set the user's full name and save to sessionStorage
  setUserName(name: string): void {
    this.userNameSource.next(name);
    sessionStorage.setItem('userName', name); // Save to sessionStorage
  }

  // Retrieve the user's name from sessionStorage
  getUserName(): string {
    return sessionStorage.getItem('userName') || 'User';
  }

  // Set the company name and save to sessionStorage
  setCompanyName(name: string): void {
    this.companyNameSource.next(name);
    sessionStorage.setItem('companyName', name); // Save to sessionStorage
  }

  // Retrieve the company name from sessionStorage
  getCompanyName(): string {
    return sessionStorage.getItem('companyName') || 'Company';
  }
}
