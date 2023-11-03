import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-redirect',
  templateUrl: './login-redirect.component.html',
  styleUrls: ['./login-redirect.component.css']
})
export class LoginRedirectComponent {
  accessToken!:any
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    this.activatedRoute.fragment.subscribe((data:any) => {
      const urlParams = new URLSearchParams(data);
      this.accessToken = urlParams.get("access_token")
    })
  }
  getUserInfo() {
    const headers = { Authorization: `Bearer ${this.accessToken}` };
    const res = this.http.get('https://www.googleapis.com/oauth2/v1/userinfo', { headers });
    res.subscribe(data => {
      console.log(data)
    })
  }
}
