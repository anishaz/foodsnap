import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { ImageGridComponent } from './image-grid/image-grid.component';

const APP_ROUTES: Routes = [
    { path: '', component: ImageGridComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegistrationComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
