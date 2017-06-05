import { Component, OnInit } from '@angular/core';
import { ImageGridService } from './image-grid.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { LoginService } from '.././login/login.service';

@Component({
  selector: 'image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.less']
})

export class ImageGridComponent implements OnInit {
  images: Array<any>;
  user: any;

  constructor(private _imageGridService: ImageGridService, private _loginService: LoginService, private _router: Router) { }

  ngOnInit() {
    this.getImages();
    this.getCurrentUser();
  }

  getImages(){
    this._imageGridService.getImages()
      .then( (images) => {
        this.images = images;
        console.log(this.images);
      })
      .catch( (err) => console.log(err))
  };

  like(image_id){
    this._imageGridService.like(image_id)
      .then(()=> {
        this.getImages();
      })
      .catch((err) => console.log(err))
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
