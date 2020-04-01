import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service'
import { CartService } from '../cart.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product;
  productSubscriber: Subscription;

  constructor(private route: ActivatedRoute, private _http: HttpService, private cartService: CartService) {
    this.productSubscriber = this._http.getProduct(this.route.snapshot.params.productId).subscribe(data => {
      this.product = data;
      console.log(this.product)
    })
  }

  ngOnInit(): void {
    
  }

  addToCart(product){
    this.cartService.addToCart(product)
  }

  ngOnDestroy(){
    this.productSubscriber.unsubscribe()
  }

}
