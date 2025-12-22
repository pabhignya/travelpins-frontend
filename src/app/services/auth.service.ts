import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  login(): void {
    window.location.href = `${this.baseUrl}/google`;
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/me`);
  }
}
