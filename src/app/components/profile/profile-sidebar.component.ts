import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '../../material';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  imports: [CommonModule, ...MATERIAL_MODULES],
  template: `
    <div class="sidebar-content">
      <h3>Profile</h3>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john.doe</p>
      <button mat-raised-button color="#FFE5B4" (click)="logout()">Logout</button>
      <button mat-button color="warn" (click)="close.emit()">Close</button>
    </div>
  `,
  styles: [`
    .sidebar-content {
      padding: 16px;
      width: 300px;
      display: flex;
      flex-direction: column;
    }
    button { margin-top: 12px; }
  `]
})
export class ProfileSidebarComponent {
  @Output() closeSidebar = new EventEmitter<void>();
  close = this.closeSidebar;

  logout() {
    window.location.href = 'http://localhost:8080/logout';
  }
}
