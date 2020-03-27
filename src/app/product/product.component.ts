import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private _http: HttpService) {
    this._http.getProduct(this.route.snapshot.params.productId).subscribe(data => {
      this.product = data;
      console.log(this.product)
    })
  }

  ngOnInit(): void {
    
  }

}
