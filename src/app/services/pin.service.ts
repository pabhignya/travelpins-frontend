// src/app/services/pin.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pin } from '../models/pin.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PinService {
    private baseUrl = 'http://localhost:8080/api/pins';

    constructor(private http: HttpClient) { }

    getPins(): Observable<Pin[]> {
        return this.http.get<Pin[]>(this.baseUrl, { withCredentials: true });
    }

    getPin(id: number) {
        return this.http.get(`${this.baseUrl}/${id}`, { withCredentials: true });
    }
    addPin(pin: any) {
        return this.http.post(this.baseUrl, pin, {
            withCredentials: true
        });
    }

    updatePin(id: number, pin: any) {
        return this.http.put(`${this.baseUrl}/${id}`, pin, {
            withCredentials: true
        });
    }

    deletePin(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`, { withCredentials: true });
    }
}
