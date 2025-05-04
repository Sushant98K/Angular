import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  baseURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }
  
  getData():Observable<Iuser[]> {
    return this._http.get<Iuser[]>(this.baseURL)
  }
}
