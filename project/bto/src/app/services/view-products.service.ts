import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

 products=[
  {
    productId: "MOB101",
    productName: "iPhone 14",
    productPrice: 69999,
    productDescription: "Apple iPhone 14 with A15 Bionic chip and advanced camera system.",
    productImage: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309731_0_yooz4b.png"
  },
  {
    productId: "MOB102",
    productName: "Samsung Galaxy S23",
    productPrice: 74999,
    productDescription: "Premium Android smartphone with AMOLED display and Snapdragon processor.",
    productImage: "https://m.media-amazon.com/images/I/61CN7ToEaAL._AC_UF350,350_QL80_.jpg"
  },
  {
    productId: "MOB103",
    productName: "OnePlus 11",
    productPrice: 56999,
    productDescription: "Flagship killer phone with Hasselblad camera and fast charging.",
    productImage: "https://m.media-amazon.com/images/I/61amb0CfMGL.jpg"
  },
  {
    productId: "MOB104",
    productName: "Google Pixel 7",
    productPrice: 59999,
    productDescription: "Google Pixel phone with Tensor chip and best-in-class camera AI.",
    productImage: "https://m.media-amazon.com/images/I/61eTdIOfV1L.jpg"
  },
  {
    productId: "MOB105",
    productName: "Redmi Note 12",
    productPrice: 18999,
    productDescription: "Budget smartphone with AMOLED display and 50MP camera.",
    productImage: "https://rukminim2.flixcart.com/image/480/640/xif0q/mobile/s/2/z/note-12-mzb0e6fin-redmi-original-imagz62gzggajgz4.jpeg?q=90"
  },
  {
    productId: "MOB106",
    productName: "Nothing Phone (1)",
    productPrice: 32999,
    productDescription: "Minimalist phone with Glyph lighting and clean Android UI.",
    productImage: "https://m.media-amazon.com/images/I/71FoicsAbML._AC_UF1000,1000_QL80_.jpg"
  }
];

    getProducts(){
      return of(this.products);
    }

    addProduct(obj:any){
        this.products.push(obj);
        return "product added!..."
    }

    deleteProducts(pid:any){
        var ind=this.products.findIndex((i)=>i.productId==pid);
        if(ind!=-1){
          this.products.splice(ind,1);
          return "product deleted!..."
        }
        else{
          return "element not found"
        }
    }

    updateProduct(obj:any){
      var ind=this.products.findIndex((e)=>e.productId==obj.productId);
      this.products.splice(ind,1,obj);
      return "updated successfully!...."
    }

    findProduct(pid:any){
      var prod=this.products.find((e)=>e.productId==pid);
        return prod;
    }



}