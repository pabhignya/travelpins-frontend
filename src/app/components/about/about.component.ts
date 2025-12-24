import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from '../../material';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ...MATERIAL_MODULES],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}
