import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const routes: Routes = [
    {path:'', redirectTo:'users', pathMatch:'full'},
    { path: 'users', component: UsersComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'view-user', component: ViewUserComponent },
    { path: 'update-user', component: UpdateUserComponent },
];
