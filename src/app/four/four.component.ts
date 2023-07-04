import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent {
  inputFiveText : string ='';
  inputSix : string = "Emmet";
  inputSeven : string ='Academy';

  @ViewChild('inputText') inputFourTextData : ElementRef | any;

  btnClicked(eve : any){
    console.log('Button clicked trigger',eve);    
  }
  inputOneEve(eve:any){
      if(eve.keyCode === 13)      
        console.log('input Keyup Trigger' , eve.target.value);
  }
  inputTwoEve(eve:any){
    console.log('input Keyup.enter event trigger',eve.target.value); 
  }
  inputThreeEve(ref : any){
    console.log('event triggered..',ref);
  }
  inputFourEve(){
    console.log('input keyup.enter trigger..',this.inputFourTextData.nativeElement.value);    
  }
  inputFiveEve(refVal : any){
    this.inputFiveText = refVal;
    console.log(this.inputFiveText);    
  }
  inputSixEve(){
    console.log(this.inputSix);     
  }
  inputSevenEve(){
    console.log('triggered', this.inputSeven);
    
  }
}
