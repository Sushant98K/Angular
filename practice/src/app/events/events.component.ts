import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  handleEvent(e: MouseEvent) {
    console.log('Type: ', e.type, (e.target as Element).className);    
  }

  handleInputEvent(e: Event) {
    console.log('Type: ', e.type);    
    // console.log('Value: ', (e.target as HTMLInputElement).value);    
  }

}
