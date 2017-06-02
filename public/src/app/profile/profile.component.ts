import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  user: any;
  user_id: String;
  images: Array<any>
  constructor(
    private _profileService:ProfileService,
    private _router: Router,
    private _route:ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param)=>{
    this.user_id = param.id
    })
    this.getmyimages(this.user_id)
  }

  // currentuser(){
  //   this._profileService.getcurrent()
  //   .then( (response)=>this.user = response)
  //   .catch( (err)=>this._router.navigate(['']) )
  // }

  getmyimages(id){
    this._profileService.getmyimages(id)
      .then( (response)=>{
        this.images = response;
        console.log("good here in component")
        console.log(this.images)
      })
      .catch( (err)=>{
        console.log("damn", err);
      } )
  }


}
