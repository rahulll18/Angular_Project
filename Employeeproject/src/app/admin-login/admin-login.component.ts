import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
})
export class AdminLoginComponent {
  admin = {
    username: 'rahul',
    password: 'neo123',
  };

  collectData(loginform: any) {
    this.admin = loginform.value
    console.log(this.admin)
  }
}
