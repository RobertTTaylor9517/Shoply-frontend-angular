import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  cart = [];
  cartSubscriber: Subscription;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartSubscriber = this.cartService.sentCart.subscribe(value => {
      this.cart = value;
    })
  }

  getCount(){
    return this.cart.reduce((total, current) =>{
      return total + current.quantity
    }, 0);
  }

  changeQuantity(item, quan){
    this.cartService.changeQuantity(item, quan);
  }

  removeFromCart(item){
    this.cartService.removeFromCart(item)
    // console.log(this.cart)
  }

  getTotal(){
    return this.cart.reduce((total, current)=> {
      if(current.quantity === 1){
        return total + current.price;
      }else{
        return total + (current.price * current.quantity);
      }
    }, 0)
  }

}
