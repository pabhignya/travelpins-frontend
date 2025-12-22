import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelPin } from '../models/travel-pin.model';

@Injectable({ providedIn: 'root' })
export class PinsService {
  private baseUrl = 'http://localhost:8080/api/pins';

  constructor(private http: HttpClient) {}

  getPins(): Observable<TravelPin[]> {
    return this.http.get<TravelPin[]>(this.baseUrl);
  }

  getPin(id: number): Observable<TravelPin> {
    return this.http.get<TravelPin>(`${this.baseUrl}/${id}`);
  }

  addPin(pin: TravelPin): Observable<TravelPin> {
    return this.http.post<TravelPin>(this.baseUrl, pin);
  }

  updatePin(pin: TravelPin): Observable<TravelPin> {
    return this.http.put<TravelPin>(`${this.baseUrl}/${pin.id}`, pin);
  }

  deletePin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
