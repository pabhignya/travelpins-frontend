import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-sidebar',
  standalone: true,
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
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
