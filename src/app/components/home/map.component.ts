import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';
import { Pin } from '../../models/pin.model';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="map" style="height: 500px;"></div>`
})
export class MapViewComponent implements AfterViewInit, OnChanges {

  @Input() pins: Pin[] = [];

  private map!: L.Map;
  private markers: L.Marker[] = [];

  ngAfterViewInit() {
    this.initMap();
  }

  ngOnChanges() {
    if (this.map) {
      this.updateMarkers();
    }
  }

  private initMap() {
    this.map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    this.updateMarkers();
  }

  private updateMarkers() {
    this.markers.forEach(m => m.remove());
    this.markers = [];

    this.pins.forEach(pin => {
      const marker = L.marker([pin.latitude, pin.longitude])
        .addTo(this.map)
        .bindPopup(`<b>${pin.locationName}</b><br>${pin.notes || ''}`);

      this.markers.push(marker);
    });
  }
}
