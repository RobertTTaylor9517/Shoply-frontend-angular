import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart = new BehaviorSubject<any>([]);
  private cart = []
  sentCart = this._cart.asObservable();

  constructor() { }

  addToCart(product){
    if(this.cart.some(e => e.name === product.name)){
      let i = this.cart.indexOf(product)
      this.cart[i].quantity += 1
      this._cart.next(this.cart)
      console.log("updated cart")
    }else{
      product["quantity"] = 1
      this.cart.push(product)
      this._cart.next(this.cart)
      console.log("added to cart")
    }
  }

  changeQuantity(item, work){
    let i = this.cart.indexOf(item)
    if(work === 'add'){
      this.cart[i].quantity += 1;
      this._cart.next(this.cart)
    }else if(this.cart[i].quantity > 1){
      this.cart[i].quantity -= 1;
      this._cart.next(this.cart)
    }
  }

  removeFromCart(item){
    let newCart = this.cart.filter(cartItem => cartItem !== item )
    console.log(newCart)
    this.cart = newCart
    this._cart.next(this.cart)
  }

  clearCart(){
    this.cart = []
    return this.cart
  }
}
