import { Injectable } from "@angular/core";
import { ProductDetails } from "../product-details.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn : 'root'})

export class ProductDetailsService{
    private productDetailsList : ProductDetails[] = [];
    
    productDetailsSub = new BehaviorSubject(this.productDetailsList);

    getDetailsFromCard(name : string , price : number , quantity : number ){
        this.productDetailsList.push(new ProductDetails(name , price , quantity));
        console.log(this.productDetailsList);
        
    }
    
    deleteItemFromBag(indexNum : number){
        this.productDetailsList.splice(indexNum , 1);
        this.productDetailsSub.next(this.productDetailsList);
    }
}