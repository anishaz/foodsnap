import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';


@Injectable()
export class ImageGridService {

  constructor(private _http: Http) { }

  getImages() {
   return this._http.get('/api/images').map((response: Response) => response.json()).toPromise();
 }

}
