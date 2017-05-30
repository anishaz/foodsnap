import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class RegistrationService {

  constructor(private _http: Http) { }

  register(user){
  return this._http.post('/api/register', user)
    .map( (response: Response) => response.json())
    .toPromise();
  }

}
