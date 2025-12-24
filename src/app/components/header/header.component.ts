// src/app/components/header/header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  template: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleProfile = new EventEmitter<boolean>();
  @Output() changeView = new EventEmitter<'home'|'about'>();

  selectView(view: 'home'|'about') {
    this.changeView.emit(view);
  }
}
