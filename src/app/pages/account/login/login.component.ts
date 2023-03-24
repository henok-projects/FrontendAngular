import { Component, OnInit } from '@angular/core';
import { Ilogin } from '../model/login.interface';
import { AuthService } from '../../../core/services/account/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginInput: Ilogin = {
    username: localStorage.getItem('username') || '',
    rememberMe: localStorage.getItem('username') === 'true',
    password: '',
  };
  apiResponse: any = {};
  sending: boolean = false;
  constructor(private acountService: AuthService, private _router: Router) {}
  ngOnInit(): void {}

  postLoginForm() {
    this.sending = true;
    this.acountService.login(this.loginInput).subscribe((res) => {
      this.apiResponse = res;
      this.sending = false;
      //store username to browser storage
      if (this.loginInput.username) {
        localStorage.setItem('username', this.loginInput.username);
      } else {
        localStorage.removeItem('username');
      }
      if (this.loginInput.rememberMe) {
        localStorage.setItem('rememberMe', '${ this.loginInput.rememberMe }');
      } else {
        localStorage.removeItem('rememberMe');
      }

      //redirect to Dashboard
      if (this.apiResponse && this.apiResponse.id) {
        this._router.navigate(['dashboard']);
      }
    });
  }
}
