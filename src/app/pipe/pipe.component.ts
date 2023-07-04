import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
  graphicCardDetail = {
    gName: 'GeForce RTX 4070 Ti',
    cudaCore: 7680,
    boostClock: 898.25413,
    price: 11999,
    unitsSold: 45781262,
    releasedDate: new Date(2023, 1, 23, 2, 45, 12),
    gDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    contactNum: "8956471235",
    myStr: 'he live in The kolhapur'
  }
  onBlurInput(eve: any) {

    let prepoArr = ['of', 'in', 'the', 'but','out','for','a','an','on','by','to'];
    let myStrArr = eve.target.value.split(' ');

    for(let i=0;i<myStrArr.length;i++){
      if(! prepoArr.includes(myStrArr[i])) {
        myStrArr[i] = myStrArr[i].charAt(0).toUpperCase() + myStrArr[i].slice(1);
      }      
    }     
    let str = myStrArr.join(' ')
    console.log(str);
  }
}
