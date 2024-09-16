import { inject } from '@angular/core';
import { UserAccountService } from '../customService/user-account.service';

export const authGuard = () => {
  //if we want to inject service in normal function then follow the above steps
  const account = inject(UserAccountService);

  if (account.loginFlag) {
    return true;
  } else {
    window.alert('Please login first');
    return true;
  }
};
