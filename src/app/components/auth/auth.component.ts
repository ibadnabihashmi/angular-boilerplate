import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterViewInit {

  public auth2: any;

  constructor() { }

  ngOnInit() {
  }

  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '145002189191-8tggckqftl9et52m3t9gajej5gks7fjl.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
      this.auth2.isSignedIn.listen(this.signInListenerCallback);
      this.auth2.currentUser.listen(this.currentUserListenerCallback);
    });
  }

  public signInListenerCallback(val) {
    console.log('Signin Event');
    console.log(val);
  }

  public currentUserListenerCallback(user) {
    console.log('User');
    console.log(user);
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
        const profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
      }, (error) => {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  public signOut() {
    this.auth2.signOut().then(() => {
      console.log('user signeed out();');
    });
  }

  ngAfterViewInit() {
    this.googleInit();
  }

}
