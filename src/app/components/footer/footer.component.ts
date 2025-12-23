// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <p>© 2025 Travel Pins | Contact: travel</p>
    </footer>
  `,
  styles: [`
    .footer {
      background: #f1f1f1;
      padding: 16px;
      text-align: center;
    }
  `]
})
export class FooterComponent {}
