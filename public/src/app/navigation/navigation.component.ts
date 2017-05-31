import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginService } from '.././login/login.service';

@Component({
  selector: 'navigation-component',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: any;

  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit () {
    this.getCurrentUser();
  }

    getCurrentUser() {
      this._loginService.getCurrent()
      .then( (user) => {
        this.user = user;
        console.log("logged in")
      })
        .catch( (err) => console.log(err))
    }

}
