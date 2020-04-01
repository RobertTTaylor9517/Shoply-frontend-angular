import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { CartService } from '../cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Object;
  productsSubscriber: Subscription;

  constructor(private _http: HttpService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productsSubscriber = this._http.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    })
  }

  addToCart(product){
    this.cartService.addToCart(product);
  }

  ngOnDestroy(){
    this.productsSubscriber.unsubscribe()
  }

}
