import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MapViewComponent } from './map.component';
import { ListViewComponent } from './list.component';
import { Pin } from '../../models/pin.model';
import { MATERIAL_MODULES } from '../../material';
import { MatDialog } from '@angular/material/dialog';
import { AddPinDialogComponent } from './add-pin.dialog';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        MapViewComponent,
        ListViewComponent,
        ...MATERIAL_MODULES
    ],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    pins: Pin[] = [];
    view: 'map' | 'list' = 'list';

    constructor(private http: HttpClient, private dialog: MatDialog) { }

    ngOnInit() {
        this.fetchPins();
    }

    fetchPins() {
        this.http.get<Pin[]>('http://localhost:8080/api/pins', {
            withCredentials: true
        }).subscribe({
            next: data => {
                console.log('Pins:', data);
                this.pins = data;
            },
            error: err => console.error('Error fetching pins', err)
        });
    }
    openAddPin() {
        const ref = this.dialog.open(AddPinDialogComponent, {
            width: '400px'
        });

        ref.afterClosed().subscribe(saved => {
            if (saved) {
                this.fetchPins(); // 🔥 refresh from DB
            }
        });
    }

    toggleView(view: 'map' | 'list') {
        this.view = view;
    }

    logout() {
        window.location.href = 'http://localhost:8080/logout';
    }
}
