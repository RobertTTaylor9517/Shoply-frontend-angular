import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []

  constructor() { }

  addToCart(product){
    if(this.cart.some(e => e.name === product.name)){
      let i = this.cart.indexOf(product)
      this.cart[i].quantity += 1
    }else{
      product["quantity"] = 1
      this.cart.push(product)
    }
  }
  getCart(){
    console.log("getting cart")
    return this.cart
  }

  // getCount(){
  //   console.log("count method")
    
  //   this.countValue = this.cart.reduce((total, current) =>{
  //     return total + current.quantity
  //   }, 0);
  //   this.count.next(this.countValue);
  // }

  clearCart(){
    this.cart = []
    return this.cart
  }
}
