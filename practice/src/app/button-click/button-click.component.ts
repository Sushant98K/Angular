import { Component } from '@angular/core';

@Component({
  selector: 'app-button-click',
  imports: [],
  templateUrl: './button-click.component.html',
  styleUrl: './button-click.component.css'
})
export class ButtonClickComponent {
  handleClickEvent(): void {
    alert('Button is clicked')
  }
}
