import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.component.html',
  styleUrls: ['./getset.component.css'],
})
export class GetsetComponent {
  name?: string;
  finalName?: string;

  getName(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }
  showName(e: Event) {
    this.finalName = this.name;
  }
  setName(e: Event){
    this.name = 'Shawn'
  }
}
