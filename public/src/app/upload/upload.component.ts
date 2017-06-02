import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  uploadedFileUrls: string[] = [];

  async showPicker() {
    const client = filestack.init("AyNNLX1PIQr6HjkyrSfqRz");
    const result = await client.pick({ maxFiles: 1 });
    console.log(result)
    // const url = result.filesUploaded[0].url;
    // this.uploadedFileUrls.push(url);
    // Import service -- from inside of this function make a call to the service function that will make a call to the backend
    // ex. this._uploadService.addPhoto(result.filesUploaded[0])
    // SERVICE
      // this._http.post('nameofurl', object to pass to serve).map.....

      // CONTROLLER
        // var image = new Image(req.body);
        // image._user = req.session.user._id;
        // image.save()
  }

}
