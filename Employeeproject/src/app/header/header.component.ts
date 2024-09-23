import { Component } from '@angular/core';
import { UserAccountService } from '../customService/user-account.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  heading1 = 'CRUD';

  username="";
  /* changes auto detect : Angular Store */
  constructor(public account : UserAccountService , public cookie : CookieService){
    this.username=cookie.get('user');
    console.log(this.username);
  }
  logout(){
   this.cookie.delete('user');
   this.username="";
   this.account.loginFlag=false;
   window.alert("logged out successfully.....");
  }
}
