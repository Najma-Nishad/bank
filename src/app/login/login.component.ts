import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // data="Happy Banking With Us...."  //string interpolation
  pdata="Account Number"              // propertybinding

  login(){                          //
    alert("login clicked")          //event binding
  }
  accnoChange(event:any){             //
    console.log(event.target.value);  // $event binding
    }                                 //
}

