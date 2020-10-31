import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {


  constructor( private afAuth: AngularFireAuth,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.afAuth.getRedirectResult().then(result => {
      if (result.user !== undefined) {
        //this.router.navigate(['/checkout']);
      }
    });
  }

  signIn() {
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

}
