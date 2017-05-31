import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
user: any;

constructor(private _loginService: LoginService, private _router: Router) {}

ngOnInit () {
  this.getCurrentUser();
}

  getCurrentUser() {
    this._loginService.getCurrent()
    .then( (user) => this.user = user)
      .catch( (err) => console.log(err))
  }

}
