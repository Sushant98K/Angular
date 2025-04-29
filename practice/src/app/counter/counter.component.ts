import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = 0
  isDisable = true
  
  handleCount(val?: string) {
    if (val == 'plus') {
      this.count += 1
      this.isDisable=false
    }
    else if (val == 'minus' && this.count > 0 ) {
      this.count -= 1
    } else {
      this.count = 0
      this.isDisable=true
    }
  }
}
