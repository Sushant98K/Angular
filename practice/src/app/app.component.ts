import { Component } from '@angular/core';
import { ButtonClickComponent } from './button-click/button-click.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [ButtonClickComponent, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice';
}
