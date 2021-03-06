import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this._http.loginUser(this.username, this.password).subscribe((data: any)=>{
      console.log(data)
      localStorage.setItem("token", data['token']);
      localStorage.setItem("user_id", data['user_id']);
    })
  }

}
