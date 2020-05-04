import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username: string = '';
  password: string='';
  wallet: number = 0;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    this._http.signupUser(this.username, this.password, this.wallet).subscribe((data: any) =>{
      
      console.log(data)
      
      localStorage.setItem("token", data['token']);
      localStorage.setItem("user_id", data['user_id']);
    })
  }

}
