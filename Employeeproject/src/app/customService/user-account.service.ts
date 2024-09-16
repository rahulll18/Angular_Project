import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAccountService {
  loginFlag = false;

  constructor() {}

  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin123') {
      this.loginFlag = true;

      //we will set the cookie
    } else {
      this.loginFlag = false;
    }

    return this.loginFlag;
  }

  logout(username: string) {
    this.loginFlag = false;

    //we will remove the cookie
  }
}
