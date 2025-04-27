import { Component } from '@angular/core';
import { ButtonClickComponent } from './button-click/button-click.component';

@Component({
  selector: 'app-root',
  imports: [ButtonClickComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practice';
}
