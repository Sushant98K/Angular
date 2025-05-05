import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  constructor(private router: Router) { }
  

  
  onCancel() {
    this.router.navigateByUrl('users')
  }
}
