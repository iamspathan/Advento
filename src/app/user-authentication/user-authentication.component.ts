import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-authentication',
  templateUrl: './user-authentication.component.html',
  styleUrls: ['./user-authentication.component.css']
})
export class UserAuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signinTab() {
    const signinTab = document.getElementById('signinTab');
    const login = document.getElementById('login');
    const signupTab = document.getElementById('signupTab');
    const signup = document.getElementById('signup');
    signinTab.classList.add('selected');
    login.classList.add('is-selected');

    signupTab.classList.remove('selected');
    signup.classList.remove('is-selected');
  }

  signupTab() {
    const signinTab = document.getElementById('signinTab');
    const login = document.getElementById('login');
    const signupTab = document.getElementById('signupTab');
    const signup = document.getElementById('signup');
    signinTab.classList.remove('selected');
    login.classList.remove('is-selected');

    signupTab.classList.add('selected');
    signup.classList.add('is-selected');
  }

}
