// src/app/components/pin-list/pin-list.component.ts
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MATERIAL_MODULES } from '../../material';
import { PinService } from '../../services/pin.service';
import { Pin } from '../../models/pin.model';
import { MatDialog } from '@angular/material/dialog';
import { PinDetailDialogComponent } from './pin-detail.dialog';
import { AddPinDialogComponent } from './add-pin.dialog';

@Component({
    standalone: true,
    selector: 'app-list-view',
    imports: [CommonModule, ...MATERIAL_MODULES],
    templateUrl: './list.component.html'
})
export class ListViewComponent implements OnInit {

    displayedColumns = ['place', 'note', 'visited', 'actions'];
    dataSource = new MatTableDataSource<Pin>();

    @Input() pins: Pin[] = [];

    @ViewChild(MatSort) sort!: MatSort;

    constructor(private dialog: MatDialog,
        private pinService: PinService) { }

    ngOnInit() { }

    ngOnChanges() {
        this.dataSource.data = this.pins;
        if (this.sort) {
            this.dataSource.sort = this.sort;
        }
    }

    openDetails(pin: Pin) {
        this.dialog.open(PinDetailDialogComponent, { data: pin });
    }
    editPin(pin: Pin) {
        const ref = this.dialog.open(AddPinDialogComponent, {
            width: '400px',
            data: pin
        });

        ref.afterClosed().subscribe(updated => {
            if (updated) {
                this.pinService.getPins().subscribe(pins => {
                    this.dataSource.data = pins;
                });
            }
        });
    }

    deletePin(id: number) {
        this.pinService.deletePin(id).subscribe(() => {
            this.dataSource.data =
                this.dataSource.data.filter(p => p.id !== id);
        });
    }
}
