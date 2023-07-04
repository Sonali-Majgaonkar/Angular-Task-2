import { Component , OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Accordiant } from '../shared/accordiant.model';
import { AccordiantFormService } from '../shared/services/accordiant-form.service';

@Component({
  selector: 'app-accordiant',
  templateUrl: './accordiant.component.html',
  styleUrls: ['./accordiant.component.css']
})
export class AccordiantComponent implements OnInit{
  accordianForm : NgForm | any;
  mylist : Accordiant[] | any ;
  // isCollapse : boolean = true;
  
  constructor(private accordiantServ : AccordiantFormService){}
  
  onMyBtnClick(eve : any){
    console.log(eve.currentTarget.ariaExpanded);

    if(eve.currentTarget.ariaExpanded){
      eve.currentTarget.lastChild.classList.toggle('fa-minus');
    }
  }

  ngOnInit(): void {
    this.accordianForm = new FormGroup({
      heading : new FormControl('' , [Validators.required]),
      details : new FormControl('', [Validators.required])
    })

    this.accordiantServ.accordiantSub.subscribe((res)=>{
      this.mylist = res;
    })
  }
  onSubmitEve(){
    this.accordiantServ.getBlogFromForm(this.accordianForm.get('heading').value , this.accordianForm.get('details').value);
    
    this.accordianForm.patchValue({
      heading : ' ',
      details : ' '
    })
    // this.accordianForm.touched = this.accordianForm.get('heading').touched = this.accordianForm.get('details').touched = true;
    
  }
}
