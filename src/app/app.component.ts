import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  dataToChild : any = "Sonali";
  postLikeObj ={
    isLike : true,
    fname : 'Sonali',
    lname : 'Majgaonkar'
  }

  hobbies=['Dancing','Singing','cooking','Playing','Swimming'];
  
  myInfo : any ;

  catchedLikedData(catchedEve : any){
    console.log('Parent Catched Data' , catchedEve);
    this.myInfo = catchedEve;    
    console.log(this.myInfo
      )
  }  
}
