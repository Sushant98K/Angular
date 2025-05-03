import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch-vs-switch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngswitch-vs-switch.component.html',
  styleUrl: './structural-directive-ngswitch-vs-switch.component.scss',
})
export class StructuralDirectiveNgswitchVsSwitchComponent {
  msg?: string
  
  setGrade(val: string): void {
    this.msg = val
  }
}
