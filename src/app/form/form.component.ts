import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  onSubmit(myForm : any){
    console.log('hello',myForm.value);
    
  }
}
