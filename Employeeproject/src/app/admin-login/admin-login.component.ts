import { Component } from '@angular/core';
import { UserAccountService } from '../customService/user-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  flag = false;
  errormessage = '';

  admin = {
    username: 'rahul',
    password: 'neo123',
  };

  constructor(private account: UserAccountService, public router: Router) {}

  collectData(loginform: any) {
    this.admin = loginform.value;
    console.log(this.admin);

    //now call the service function
    this.flag = this.account.login(this.admin.username, this.admin.password);

    if (this.flag === true) {
      window.alert('Admin Log in successfully');
      this.router.navigate(['home']);
    } else {
      this.errormessage = 'Incorrect username and password';
    }
  }
}
