import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private authservice: AuthService) {}

  ngOnInit() {
    this.authStatus = this.authservice.isAuth;
  }

  onSignOn() {
    this.authservice.signIn().then(
      () => {
        console.log('Successful connection');
        this.authStatus = this.authservice.isAuth;
      }
    );
  }
  onSignOff() {
    this.authservice.signOut();
    this.authStatus = this.authservice.isAuth;
  }

}
