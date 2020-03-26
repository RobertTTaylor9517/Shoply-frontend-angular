import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = []

  constructor() { }

  addToCart(product){
    this.cart.push(product)
  }
  getCart(){
    return this.cart
  }

  clearCart(){
    this.cart = []
    return this.cart
  }
}
