import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit() {
    this.authStatus = this.authservice.isAuth;
  }

  onSignOn() {
    this.authservice.signIn().then(
      () => {
        this.authStatus = this.authservice.isAuth;
        this.router.navigate(['devices']);
      }
    );
  }
  onSignOff() {
    this.authservice.signOut();
    this.authStatus = this.authservice.isAuth;
  }

}
