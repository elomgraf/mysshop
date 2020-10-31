import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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
