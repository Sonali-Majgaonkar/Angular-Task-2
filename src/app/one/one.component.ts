import { Component } from '@angular/core'

@Component({
    selector : 'ea-one',
    templateUrl : './one.component.html',
    styleUrls : ['./one.component.css']
})

export class OneComponent{
    textName : string = 'One Name'
    textName2 : string = 'One Name 2'
    imgUrl : string ='https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg'
    colSpanNo:number =2
    showText : boolean = true
    strArr : string[] =['Sonali','Sagar','Waikar','Karad']
    showBtn:boolean=false
    bgColor:string='pink'


    getTextName(){
        return this.textName2
    }
}