import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StructuralDirectivesNgifVsIfComponent } from './structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectivesNgifVsIfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng19_prac_bootstrap';
}
