import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.scss']
})
export class NaviComponent implements OnInit {

  cart;
  counter;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cart = this.cartService.getCart();
  }

  getCount(){
    return this.cart.reduce((total, current) =>{
      return total + current.quantity
    }, 0);
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
