import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';

import { LoginService } from './login/login.service';
import { RegistrationService } from './registration/registration.service';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageGridService } from './image-grid/image-grid.service';

import { routing } from './app.routes';
import { RegistrationComponent } from './registration/registration.component';

import { NgUploaderModule } from 'ngx-uploader';
import { AppHomeComponent } from './app-home/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    RegistrationComponent,
    ImageGridComponent,
    AppHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgUploaderModule
  ],
  providers: [
    LoginService,
    RegistrationService,
    ImageGridService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
