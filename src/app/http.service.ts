import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

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

  loginUser(username, password){
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);

    return this.http.request(
      "POST",
      `${this.rootLink}login`,
      {
        responseType:"json",
        params
      })
  }

  signupUser(username, password, wallet){
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('wallet', wallet)

    return this.http.request(
      "POST",
      `${this.rootLink}signup`,
      {
        responseType:"json",
        params
      }
    )
  }

}
