// src/app/components/header/header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="#FFE5B4">
      <span>Travel Pins</span>
      <span class="spacer"></span>
      <button mat-button (click)="selectView('home')">Home</button>
      <button mat-button (click)="selectView('about')">About</button>
      <button mat-button (click)="toggleProfile.emit(true)">Profile</button>
    </mat-toolbar>
  `,
  styles: [`
    .spacer { flex: 1 1 auto; }
  `]
})
export class HeaderComponent {
  @Output() toggleProfile = new EventEmitter<boolean>();
  @Output() changeView = new EventEmitter<'home'|'about'>();

  selectView(view: 'home'|'about') {
    this.changeView.emit(view);
  }
}
