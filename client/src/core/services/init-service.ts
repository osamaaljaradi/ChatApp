import { of } from 'rxjs';
import { AccountService } from './account-service';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InitService {
  private accountService = inject(AccountService);

  init(){
    const userString = localStorage.getItem('user');
    if(!userString) return of(null);
    const user = JSON.parse(userString);
    this.accountService.currentUser.set(user);
    return of(null);
  }
}
