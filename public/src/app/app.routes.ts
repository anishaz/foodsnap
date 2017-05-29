import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';

const APP_ROUTES: Routes = [
    { path: '', component: NavigationComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegistrationComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
