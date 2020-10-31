import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Products } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

   products: Observable<any[]>;
     categories: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.products = this.firestore.collection('products',  ref => ref.where('name', '==', 'iphone 12',)).valueChanges();
        this.categories = this.firestore.collection('categories').valueChanges();
  }

}
