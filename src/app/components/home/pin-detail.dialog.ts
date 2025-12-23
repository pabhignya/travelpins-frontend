// src/app/components/pin-detail/pin-detail.dialog.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../../material';
import { CommonModule } from '@angular/common';
import { Pin } from '../../models/pin.model';

@Component({
  standalone: true,
  imports: [CommonModule, ...MATERIAL_MODULES],
  template: `
    <mat-card>
      <mat-card-title>{{ data.locationName }}</mat-card-title>
      <mat-card-content>
        <p>{{ data.notes }}</p>
        <p><strong>Visited:</strong> {{ data.createdAt | date:'mediumDate' }}</p>
        <img *ngIf="data.photoUrl" [src]="data.photoUrl" width="100%" />
      </mat-card-content>
    </mat-card>
  `
})
export class PinDetailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Pin) {}
}
