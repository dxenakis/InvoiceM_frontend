import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() logout = new EventEmitter<void>();
  onLogout() {
    this.logout.emit(); // Emit the logout event
  }
}
