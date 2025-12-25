import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MATERIAL_MODULES } from '../../../material';
import { PinService } from '../../../services/pin.service';
import { Pin } from "../../../models/pin.model";

@Component({
  standalone: true,
  selector: 'app-add-pin-dialog',
  imports: [CommonModule, FormsModule, ...MATERIAL_MODULES],
  templateUrl: './add-pin.dialog.html',
  styleUrls: ['./add-pin.dialog.css']
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
    @Inject(MAT_DIALOG_DATA) public data?: Partial<Pin>
  ) {
    if (data?.id) {             // ✅ FIX
      this.isEdit = true;
      this.locationName = data.locationName ?? '';
      this.notes = data.notes ?? '';
      this.latitude = data.latitude;
      this.longitude = data.longitude;
    } else if (data) {
      // ADD mode from map click
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
      this.pinService.updatePin(this.data.id, payload)
        .subscribe(() => this.dialogRef.close(true)); // ✅ auto close
    } else {
      this.pinService.addPin(payload)
        .subscribe(() => this.dialogRef.close(true)); // ✅ auto close
    }
  }

  close() {
    this.dialogRef.close(false);
  }
}

