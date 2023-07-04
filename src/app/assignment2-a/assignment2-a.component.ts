import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignment2-a',
  templateUrl: './assignment2-a.component.html',
  styleUrls: ['./assignment2-a.component.css']
})
export class Assignment2AComponent {
  myVal : any;
  
  onSubmit(myForm : NgForm){
    alert('Successfully Submit Form..');
  }
}
