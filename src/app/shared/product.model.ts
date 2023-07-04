export class ProductModel{
    // constructor(private pImg? : File , private pName? : string , private pPrice? : number ){
    //     pImg = pImg;
    //     pName = pName;
    //     pPrice = pPrice;
    // }

    productName : string;
    productPrice : number;
    productImage : string;
    // imageFile? : File | string

    constructor( pName : string , pPrice : number , pImg : any){
        this.productName = pName;
        this.productPrice = pPrice;
        this.productImage = pImg;
    }
}