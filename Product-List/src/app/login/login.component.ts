import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(  private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.email == 'joice@gmail.com' && this.password == 'password')
    {
      this.router.navigate(['product']);
    }
    else
    {("Invalid credential.")}
  }

}
