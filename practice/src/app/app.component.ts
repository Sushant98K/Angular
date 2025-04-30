import { Component } from '@angular/core';
import { ButtonClickComponent } from './button-click/button-click.component';
import { CounterComponent } from './counter/counter.component';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'app-root',
  imports: [ButtonClickComponent, CounterComponent, EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice';
}
