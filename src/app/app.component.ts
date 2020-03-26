import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shoply-angular';
  cart;

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cart = this.cartService.getCart();
  }
}
