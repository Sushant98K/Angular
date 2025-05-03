import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.scss',
})
export class AttributeDirectiveComponent {
  //ngClass
  //1
  textColor?: string;

  changeColor(col: string): void {
    this.textColor = col;
  }

  //2
  isTextGreen: boolean = false;

  toggleColor() {
    this.isTextGreen = !this.isTextGreen;
  }

  //3
  userClass?: string;

  //ngStyle
  //1

  styleColor: string = 'yellow'
  
  onChange(col: string) {
    this.styleColor = col
  }
}
