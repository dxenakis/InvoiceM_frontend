import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SysParamsService } from '../../shared/services/sys-params.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  userName: string = '';
  companyName: string = '';

  constructor(private sysParamsService: SysParamsService) {}
  
  ngOnInit(): void {

        // Subscribe to userName and companyName observables
        this.sysParamsService.userName$.subscribe(name => {
          this.userName = name;
        });
    
        this.sysParamsService.companyName$.subscribe(name => {
          this.companyName = name;
        });

  }

  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }


  @Output() logout = new EventEmitter<void>();
  onLogout() {
    this.logout.emit(); // Emit the logout event
  }
}
