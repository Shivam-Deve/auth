import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private clientId = "";
  private redirectUri = "http://localhost:4200/redirect";
  private scope = 'profile email';
  private responseType = 'token';
  private authEndpoint = 'https://accounts.google.com/o/oauth2/v2/auth';

  constructor(
    private http: HttpClient,
  ) { }
  
  oauthSignIn() {
    const url = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scope}&response_type=${this.responseType}`;
    window.location.href = url;
  }
}
