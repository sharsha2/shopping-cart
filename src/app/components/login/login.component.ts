import { Component, OnInit } from '@angular/core';
import {RegisterComponent} from '../register/register.component';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn: boolean;
  model: any = { };
  email = '';
  password = '';

  constructor(public authservice: AuthService) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    }
    else {
      this.isSignedIn = false;
    }
  }
  // tslint:disable-next-line:typedef
  async onSignin(email: string, password: string){
    await this.authservice.signin(email, password);
    if (this.authservice.isLoggedIn) {
      this.isSignedIn = true;
    }
  }
  // tslint:disable-next-line:typedef
  handleLogout(){
    this.isSignedIn = false;

  }

  // tslint:disable-next-line:typedef
  login() {
    console.log(this.model);
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.authservice.signOut();
    localStorage.removeItem('user');
  }
}


