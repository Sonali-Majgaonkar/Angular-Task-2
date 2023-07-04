import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment2-b',
  templateUrl: './assignment2-b.component.html',
  styleUrls: ['./assignment2-b.component.css']
})
export class Assignment2BComponent {

  @ViewChild('myForm') myForm : any;

  constructor(){}

  onSubmitFun() {
    console.log('qwjd' , this.myForm.value.contactVal);
    // alert('Successfully Submit Form..');
  }
}
