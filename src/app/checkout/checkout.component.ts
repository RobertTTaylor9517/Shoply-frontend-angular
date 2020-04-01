import { Component, OnInit } from '@angular/core';
import {HttpService } from '../http.service';
import { CartService } from '../cart.service'
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cart: []
  cartSubscriber: Subscription;

  constructor(private _http: HttpService, private cartService: CartService) { }

  ngOnInit(): void {

    this.cartSubscriber = this.cartService.sentCart.subscribe(data => {
      this.cart = data;
    })
  }

  ngOnDestroy(){
    this.cartSubscriber.unsubscribe()
  }

}
