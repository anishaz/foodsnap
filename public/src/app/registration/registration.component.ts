import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {
  errors: any;

  constructor(private _registrationService: RegistrationService, private _router: Router) {}

  ngOnInit() {
  }

  register(formData){
  this._registrationService.register(formData.value)
    .then( (user) => this._router.navigate(['/login']))
    .catch( (err) => {
      this.errors = err._body.split(',')
    })
  }

}
