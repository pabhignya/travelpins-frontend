import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '../../material';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ...MATERIAL_MODULES],
  template: `
    <div class="about-content">
      <h2>About Travel Pins</h2>
      <p>
        Travel Pins is your personal travel diary app. 
        Save your favorite places, add notes, and visualize your trips on a map.
        Stay organized and never forget a visit!
      </p>
    </div>
  `,
  styles: [`
    .about-content {
      padding: 16px;
    }
  `]
})
export class AboutComponent {}
