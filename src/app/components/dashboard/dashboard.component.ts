import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ProfileSidebarComponent } from '../profile/profile-sidebar.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, MatButtonModule, ProfileSidebarComponent, HomeComponent, AboutComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showProfile = false;
  showAbout = false;

  toggleProfile() {
    this.showProfile = !this.showProfile;
  }

  toggleAbout() {
    this.showAbout = !this.showAbout;
  }

  toggleHome() {
    this.showAbout = false;
  }

  logout() {
    window.location.href = 'http://localhost:8080/logout';
  }
}
