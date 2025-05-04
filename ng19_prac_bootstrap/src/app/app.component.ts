import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignalsComponent } from './signals/signals.component';
// import { StructuralDirectivesNgifVsIfComponent } from './structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component';
// import { StructurealDirectiveNgforVsForComponent } from './structureal-directive-ngfor-vs-for/structureal-directive-ngfor-vs-for.component';
// import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
// import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // StructuralDirectivesNgifVsIfComponent,
    // StructurealDirectiveNgforVsForComponent,
    // StructuralDirectiveNgswitchVsSwitchComponent,
    // AttributeDirectiveComponent,
    // SignalsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng19_prac_bootstrap';
}
