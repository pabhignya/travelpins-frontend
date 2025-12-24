import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  profile: { name: string; email: string } = { name: '', email: '' };

  private http = inject(HttpClient);

  ngOnInit() {
    this.loadProfile();
  }
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

  loadProfile() {
    this.http.get<{ name: string; email: string }>('http://localhost:8080/api/me', { withCredentials: true })
      .subscribe({
        next: data => this.profile = data,
        error: err => console.error('Error fetching profile', err)
      });
  }
}
