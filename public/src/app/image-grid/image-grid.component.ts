import { Component, OnInit } from '@angular/core';
import { ImageGridService } from './image-grid.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.less']
})

export class ImageGridComponent implements OnInit {
  images: Array<any>;

  constructor(private _imageGridService: ImageGridService, private _router: Router) { }

  ngOnInit() {
    this.getImages();
  }

  getImages(){
    this._imageGridService.getImages()
      .then( (images) => {
        this.images = images;
        console.log(this.images);
      })
      .catch( (err) => console.log(err))
  };
}
