import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../../material';
import { PinService } from '../../services/pin.service';
import { Pin } from '../../models/pin.model';

@Component({
    standalone: true,
    selector: 'app-add-pin-dialog',
    imports: [CommonModule, FormsModule, ...MATERIAL_MODULES],
    template: `
    <h2 mat-dialog-title>
      {{ isEdit ? 'Edit Place' : 'Add Place' }}
    </h2>

    <mat-dialog-content>
      <mat-form-field appearance="fill" class="full">
        <mat-label>Place</mat-label>
        <input matInput [(ngModel)]="locationName">
      </mat-form-field>

      <mat-form-field appearance="fill" class="full">
        <mat-label>Notes</mat-label>
        <textarea matInput rows="3" [(ngModel)]="notes"></textarea>
      </mat-form-field>

      <mat-form-field appearance="fill" class="full">
        <mat-label>Latitude</mat-label>
        <input matInput type="number" [(ngModel)]="latitude">
      </mat-form-field>

      <mat-form-field appearance="fill" class="full">
        <mat-label>Longitude</mat-label>
        <input matInput type="number" [(ngModel)]="longitude">
      </mat-form-field>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button (click)="close()">Cancel</button>
      <button mat-raised-button color="primary" (click)="save()">
        {{ isEdit ? 'Update' : 'Save' }}
      </button>
    </mat-dialog-actions>
  `,
    styles: [`.full { width: 100%; }`]
})
export class AddPinDialogComponent {

    isEdit = false;

    locationName = '';
    notes = '';
    latitude?: number;
    longitude?: number;

    constructor(
        private dialogRef: MatDialogRef<AddPinDialogComponent>,
        private pinService: PinService,
        @Inject(MAT_DIALOG_DATA) public data?: Pin
    ) {
        if (data) {
            this.isEdit = true;
            this.locationName = data.locationName;
            this.notes = data.notes;
            this.latitude = data.latitude;
            this.longitude = data.longitude;
        }
    }

    save() {
        const payload = {
            locationName: this.locationName,
            notes: this.notes,
            latitude: this.latitude,
            longitude: this.longitude
        };

        if (this.isEdit && this.data?.id) {
            this.pinService.updatePin(this.data?.id, payload)
                .subscribe(() => this.dialogRef.close(true));
        } else {
            this.pinService.addPin(payload)
                .subscribe(() => this.dialogRef.close(true));
        }
    }

    close() {
        this.dialogRef.close(false);
    }
}
