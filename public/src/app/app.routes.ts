import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '' },
    { path: 'login', component: LoginComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
