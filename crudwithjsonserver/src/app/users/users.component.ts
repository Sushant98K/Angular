import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Iuser } from '../iuser';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  apiData?: Iuser[];
  constructor(private crud: CrudService, private router:Router) {}

  getAllData() {
    this.crud.getData().subscribe((res) => {
      this.apiData = res;
    });
  }

  ngOnInit(): void {
    this.getAllData();
  }

  addNewUser() {
    this.router.navigateByUrl('add-user')
  }
}
