import { Component, OnInit } from '@angular/core';
import { Ilogin } from '../model/login.interface';
import { AccountService } from '../../../core/services/account/account.service';

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
  constructor(private acountService: AccountService) {}
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
    });
  }
}