import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-count-controller',
  templateUrl: './count-controller.component.html',
  styleUrls: ['./count-controller.component.css']
})
export class CountControllerComponent implements OnInit {
  quntityCount : number = 1;  

  constructor( private prodServe : ProductService ){}
  

  ngOnInit(): void {    
  }

  onBtnClick(event : any){
      event.target.className === 'fa fa-plus' || event.target.id == 'plus' ? ++this.quntityCount : this.quntityCount--
      this.prodServe.quntityCountsub.next(this.quntityCount);
  }
}
