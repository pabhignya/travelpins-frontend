import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  template: `
    <div class="profile-content">
      <h3>Profile</h3>
      <p>Name: {{ profile?.name }}</p>
      <p>Email: {{ profile?.email }}</p>
      <button mat-raised-button color="warn" (click)="close()">Close</button>
      <button mat-button color="primary" (click)="logout()">Logout</button>
    </div>
  `,
  styles: [`
    .profile-content {
      padding: 16px;
      width: 250px;
    }
  `]
})
export class ProfileSidebarComponent {
  @Input() profile: { name: string; email: string } = { name: '', email: '' };
  @Output() closeSidebar = new EventEmitter<void>();

  close() {
    this.closeSidebar.emit();
  }

  logout() {
    window.location.href = 'http://localhost:8080/logout';
  }
}
