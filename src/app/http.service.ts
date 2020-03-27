import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  rootLink: string = 'http://localhost:8080/'

  getProducts(){
    return this.http.get(`${this.rootLink}products`)
  }

  getProduct(id){
    return this.http.get(`${this.rootLink}products/${id}`)
  }

}
