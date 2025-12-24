import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import maplibregl from 'maplibre-gl';
import { MatDialog } from '@angular/material/dialog';
import { Pin } from '../../models/pin.model';
import { AddPinDialogComponent } from './add-pin.dialog';

@Component({
  selector: 'app-map-view',
  standalone: true,
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapViewComponent implements AfterViewInit, OnChanges {

  @ViewChild('map', { static: true }) mapEl!: ElementRef<HTMLDivElement>;
  @Input() pins: Pin[] = [];

  map!: maplibregl.Map;
  markers: maplibregl.Marker[] = [];

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pins'] && this.map) {
      this.renderPins();
    }
  }

  private initMap(): void {
    this.map = new maplibregl.Map({
      container: this.mapEl.nativeElement,
      style: 'https://demotiles.maplibre.org/style.json',
      center: [0, 20],
      zoom: 1.5,
      maxZoom: 18
    });

    this.map.addControl(new maplibregl.NavigationControl());

    this.map.on('load', () => {
      this.renderPins();
      this.map.resize();
    });
  }

  private renderPins(): void {
    // remove old markers
    this.markers.forEach(m => m.remove());
    this.markers = [];

    this.pins.forEach(pin => {
      if (pin.latitude == null || pin.longitude == null) return;

      const marker = new maplibregl.Marker({ color: '#1976d2' })
        .setLngLat([pin.longitude, pin.latitude])
        .addTo(this.map);

      marker.getElement().addEventListener('click', () => {
        this.openEditDialog(pin);
      });

      this.markers.push(marker);
    });
  }

  private openEditDialog(pin: Pin): void {
    const ref = this.dialog.open(AddPinDialogComponent, {
      width: '400px',
      data: pin
    });

    ref.afterClosed().subscribe(updated => {
      if (updated) {
        // let HomeComponent refresh pins from backend
      }
    });
  }
}
