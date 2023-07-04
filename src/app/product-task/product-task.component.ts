import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { ProductDetailsService } from '../shared/services/product-details.service';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { ProductModel } from '../shared/product.model';

@Component({
  selector: 'app-product-task',
  templateUrl: './product-task.component.html',
  styleUrls: ['./product-task.component.css']
})
export class ProductTaskComponent implements OnInit {

  isFormVisible : boolean = false;
  quntityCount : number = 1 ;
  productList : any ;
  currentItem : any;
  tableBagItem : any ;
  addProductForm : any;
  imgSize : boolean = true;
  imgUrl : any = 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg';

  @ViewChild('closeForm') closeForm : any;
  
  constructor( private prodServe : ProductService , private detailsSeve : ProductDetailsService){}
  
  ngOnInit(): void {

    this.addProductForm = new FormGroup({
      img : new FormControl('',[Validators.required]),
      pName : new FormControl('',[Validators.required]),
      price : new FormControl('',[Validators.required])
    })

    this.prodServe.productSub.subscribe((productList : any)=>{
      this.productList = productList;   
    })

    this.prodServe.quntityCountsub.subscribe(res =>{
      this.quntityCount = res;
    })
  }

  onImgChangeEve(eve : any){
    if(eve.target.files){
      let reader = new FileReader();
      reader.readAsDataURL(eve.target.files[0]);
      reader.onload = (event : any )=>{
        this.imgUrl = event.target.result;
      }
    }
    if((eve.target.files[0].size / 1024) > 100){
      this.imgSize = false;
    }    
  }

  onCloseIcon(){
    this.closeForm.nativeElement.classList.add('d-none');
    this.addProductForm.reset();
  }

  onBuyBtnClick(){    
    this.closeForm?.nativeElement.classList.remove('d-none');
  }
  onAddProductClick(){
    let newDataObj : ProductModel = new ProductModel(this.addProductForm.get('pName').value,this.addProductForm.get('price').value,this.imgUrl);
    this.prodServe.newProductData(newDataObj);
  }

  onAddToBagClick(id : any , eve : any){
    this.currentItem = this.prodServe.getSelectedIndexItem(+id);
    
    this.detailsSeve.productDetailsSub.subscribe((res : any)=>{
      this.tableBagItem = res;
    })
    
    
    if(this.tableBagItem){
      console.log('table item is not null', this.tableBagItem.pName);
      console.log(this.tableBagItem.pName , this.currentItem.productName);
      
      if(!this.tableBagItem?.pName == this.currentItem.productName){
        this.detailsSeve.getDetailsFromCard(this.currentItem.productName , this.currentItem.productPrice , this.quntityCount);
      }
    }
    else{
      console.log('empty bag');
      
      this.detailsSeve.getDetailsFromCard(this.currentItem.productName , this.currentItem.productPrice , this.quntityCount);
    }
    console.log('table item',this.tableBagItem);
    console.log('current item',this.currentItem);
    
    this.prodServe.quntityCountsub.next(1);
  }

  onCancelBtnClick(index : number){
    console.log(index);
    this.detailsSeve.deleteItemFromBag(index);
  }

}
