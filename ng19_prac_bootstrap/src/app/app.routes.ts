import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SignalsComponent } from './signals/signals.component';
import { StructuralDirectivesNgifVsIfComponent } from './structural-directives-ngif-vs-if/structural-directives-ngif-vs-if.component';
import { StructurealDirectiveNgforVsForComponent } from './structureal-directive-ngfor-vs-for/structureal-directive-ngfor-vs-for.component';
import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    // {path: '', component: any error page},
    { path: '', redirectTo: 'user', pathMatch: 'full'}, // default route must be first object
    { path: 'user', component: UsersComponent },
    { path: 'signals', component: SignalsComponent },
    { path: 'ngif', component: StructuralDirectivesNgifVsIfComponent },
    { path: 'ngfor', component: StructurealDirectiveNgforVsForComponent },
    { path: 'ngswitch', component: StructuralDirectiveNgswitchVsSwitchComponent },
    { path: 'atribute', component: AttributeDirectiveComponent },
    {path: 'profile', component: ProfileComponent},
    { path: '**', component: PageNotFoundComponent}  //Wildcard routes must be last object
];
