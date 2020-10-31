import { Component, OnInit } from '@angular/core';
import { FirebaseService} from '../services/firebase.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;

     products: Observable<any[]>;
     categories: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {

  }

   

    ngOnInit() {
        this.products = this.firestore.collection('products').valueChanges();
        this.categories = this.firestore.collection('categories').valueChanges();
        console.log(this.categories);
    }
}
