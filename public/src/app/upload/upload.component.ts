import { Component, OnInit } from '@angular/core';
import { UploadService } from './upload.service';
import { RouterModule, Routes, Router } from '@angular/router';

declare const filestack: {
  init(apiKey: "AyNNLX1PIQr6HjkyrSfqRz"): {
    pick({ maxFiles }: { maxFiles: number }):
      Promise<{ filesUploaded: { url: string }[] }>
  }
};

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.less']
})

export class UploadComponent implements OnInit {
  image: any;

  constructor(private _uploadService: UploadService) { }

  ngOnInit() {
  }

  uploadedFileUrls: string[] = [];

  async showPicker() {
    // console.log("before the crazy")
    const client = filestack.init("AyNNLX1PIQr6HjkyrSfqRz");
    // console.log("after the crazy")
    const result = await client.pick({ maxFiles: 1 });
    // if(result.filesFailed.length > 0) {
    //   alert("There was a problem uploading the file.")
    // }
    console.log("the result", result);
    console.log("we want the image here", result.filesUploaded[0]);
    // const url = result.filesUploaded[0].url;
    // this.uploadedFileUrls.push(url);
    this._uploadService.addPhoto(result.filesUploaded[0])
      .then( (response) => {
        this.image = response;
        console.log("wow, passed!!!")
      })
      .catch( (err) => {
        console.log(err);
    })
  }


    // Import service -- from inside of this function make a call to the service function that will make a call to the backend
    // ex. this._uploadService.addPhoto(result.filesUploaded[0])
    // SERVICE
      // this._http.post('nameofurl', object to pass to serve).map.....

      // CONTROLLER
        // var image = new Image(req.body);
        // image._user = req.session.user._id;
        // image.save()

    // DISPLAY
      // get that info from db
      // COMPONENT
      // *ngFor="let image of images"
      // <img src="{{image.url}}">
  }
