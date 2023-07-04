import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-five',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.css']
})
export class FiveComponent implements OnInit {
  isSizeLess : boolean = true;
  imgSize : any ;
  formDemo : any;

  ngOnInit(): void {
    this.formDemo = new FormGroup({
      imgInput : new FormControl('',Validators.required)
    })
  }

  onFileUploadEve(eve : any){
    console.log(eve,'ajhdfauh');
    console.log((eve.target.files[0].size) / 1000);
    this.imgSize = (eve.target.files[0].size) / 1000;
    if(this.imgSize > 100){
      this.isSizeLess = false;
      // this.formDemo.reset();
    }
  }
  onSubmit(){
    console.log(this.formDemo);
    alert('successfully done')
  }
}
