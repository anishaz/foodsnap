import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class UploadService {

  constructor(private _http: Http) { }

  addPhoto(image){
    return this._http.post('/api/upload', image)
      .map( (response: Response) => response.json())
      .toPromise();
  }

}
