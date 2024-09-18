import { Component } from '@angular/core';
import { UserAccountService } from '../customService/user-account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  heading1 = 'CRUD';

  constructor(account: UserAccountService) {}
}
