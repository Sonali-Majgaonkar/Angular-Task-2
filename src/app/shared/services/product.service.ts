import { Injectable } from "@angular/core";
import { ProductModel } from "../product.model";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({providedIn : 'root'})
export class ProductService{
    private productList : ProductModel[] =[
        new ProductModel( 'Nutri Choice' ,  200 , 'https://m.media-amazon.com/images/I/61BLfXsvmBL._SX679_.jpg' ),
        new ProductModel( 'ParleG' ,  120 , 'https://m.media-amazon.com/images/I/71bufOt9zAL._SX679_.jpg' ),
        new ProductModel( 'Good Day' ,   250 , 'https://m.media-amazon.com/images/I/71n1Q3cQL3L._SX679_.jpg' ),
        new ProductModel( 'Marie Gold' ,   140 , 'https://m.media-amazon.com/images/I/71I-KF81TaL._SX679_.jpg' ),
        new ProductModel( 'Bournvita' ,  180 , 'https://m.media-amazon.com/images/I/71nVBDkGsdL._SX679_.jpg' ),
    ]

    productSub = new BehaviorSubject(this.productList.slice());

    quntityCountsub = new Subject<number>();

    getSelectedIndexItem(index : number){
        return this.productList.slice()[index];
    }

    newProductData(newData : ProductModel){
        this.productList.push(newData);
        alert('Product Added Successfully..');
        this.productSub.next(this.productList.slice());
    }
}