import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  
  baseURL: string = 'http://localhost:3000/Users';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Iuser[]>(this.baseURL)
  }

}
