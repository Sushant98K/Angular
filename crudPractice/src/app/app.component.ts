import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudService } from './crud.service';
import { Iuser } from './iuser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'crudPractice';

  apiData?: Iuser[];

  constructor(private crud: CrudService) {}

  loadUsers() {
    this.crud.getData().subscribe((res) => {
      this.apiData = res;
      console.log(this.apiData);
      
    });
  }
}
