import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="login-container">
      <h2>Login</h2>
      <button (click)="login()" class="google-btn">
        Sign in with Google
      </button>
    </div>
  `,
  styles: [`
    .login-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
    }
    .google-btn {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      background-color: #4285f4;
      color: white;
      border-radius: 4px;
    }
    .google-btn:hover {
      background-color: #357ae8;
    }
  `]
})
export class LoginComponent {

  login() {
  window.location.href = 'http://localhost:8080/oauth2/authorization/google';
}


}
