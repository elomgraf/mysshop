import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  constructor( private afAuth: AngularFireAuth,
    
    ) { }

  ngOnInit(): void {


  }

    signIn() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
