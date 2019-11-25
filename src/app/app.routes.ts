import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
{ path: 'admin',
children: [
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent, pathMatch:'full'},
{ path: 'users', component: UsersComponent, pathMatch:'full'},
{ path: '**', redirectTo: 'login' }
],
},
{ path: '**', redirectTo: 'login' }
];

