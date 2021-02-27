import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService} from '../../services/auth.service';
import { Router} from '@angular/router';
import { loggedIn} from '@angular/fire/auth-guard';
import { LoginComponent} from '../login/login.component';

// tslint:disable-next-line:typedef
function passwordMatchValidator(form) {
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (password.value !== confirmPassword.value) {
    confirmPassword.setErrors({passwordMatch: true});
  }
  else {
    confirmPassword.setErrors(null);
  }
  return null;
}

// tslint:disable-next-line:typedef
function symbolValidator(control) {
  if (control.hasError('required')) {
    return null;
  }
  if (control.hasError('minlength')) {
    return null;
  }
  if (control.value.indexOf('@') > -1){
    return null;
  } else {
    return { symbol: true};
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn: boolean;
  registerForm: FormGroup;
  fieldTextType: boolean;
  errorMessage = ''; // validation error
  error: {name: string, message: string} = {name: '', message: ''}; // for firebase error handling.
  email: string;
  password: string;

  constructor(private builder: FormBuilder,
              public authservice: AuthService,
              private router: Router) { }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true;
    }
    else {
      this.isSignedIn = false;
      this.buildForm();
    }
  }
  // tslint:disable-next-line:typedef
  async onSignup(email: string, password: string){
    await this.authservice.signup(email, password);
    if (this.authservice.isLoggedIn) {
      this.isSignedIn = true;
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

  // tslint:disable-next-line:typedef
  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(8)]],
      confirmPassword: '',
    }, {
      validators: passwordMatchValidator
    });
  }
  // tslint:disable-next-line:typedef
  handleLogout(){
    this.isSignedIn = false;

  }

  // tslint:disable-next-line:typedef
  register() {
    alert('registered');
  }

  // tslint:disable-next-line:typedef
  // tslint:disable-next-line:typedef
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authservice.signOut();
    localStorage.removeItem('user');
  }

}
