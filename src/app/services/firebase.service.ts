import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class Products {
  
  image: File;
  name: number;
  price: number;
  category: string;
  description: string;

}

export class FirebaseService {


 products: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.products = firestore.collection('products').valueChanges();
  }
}
