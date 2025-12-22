import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pin {
  id: number;
  locationName: string;
  photoUrl: string;
  notes: string;
  createdAt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pins: Pin[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPins();
  }

  fetchPins() {
    this.http.get<Pin[]>('http://localhost:8080/api/pins') // your Spring Boot endpoint
      .subscribe({
        next: (data) => this.pins = data,
        error: (err) => console.error('Error fetching pins', err)
      });
  }
}
