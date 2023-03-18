import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ilogin } from '../../../pages/account/model/login.interface';

@Injectable()
export class AccountService {
  constructor(private _httpClient: HttpClient) {}

  login(input: Ilogin) {
    return this._httpClient.post(
      'https://ytc/Beginner2Expert.com/angular14/api/public/lesssecure/account/login',
      input
    );
  }
}
