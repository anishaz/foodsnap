import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { UploadComponent } from './upload/upload.component';

import { ProfileComponent } from './profile/profile.component';


const APP_ROUTES: Routes = [
    { path: '', component: ImageGridComponent },
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegistrationComponent},
    { path: 'upload', component: UploadComponent},
    { path: 'profile/:id', component: ProfileComponent},

];

export const routing = RouterModule.forRoot(APP_ROUTES);
