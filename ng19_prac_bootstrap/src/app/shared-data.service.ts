import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }
  
  
  userData = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@gmail.com',
    subscription: 'basic',
  };
  
  isEligibleForSubscription(): boolean {
    if (
      this.userData.subscription == 'basic' &&
      this.userData.email.endsWith('@gmail.com')
    ) {
      return true;
    } else {
      return false;
    }
  }

  
  getUserData() {
    return this._http.get(this.API_URL);
  }
}
