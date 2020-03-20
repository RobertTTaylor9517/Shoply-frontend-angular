import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products)
    })
  }

}
