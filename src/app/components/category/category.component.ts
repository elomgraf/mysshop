import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

   products: Observable<any[]>;
     categories: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.products = this.firestore.collection('products', ref => ref.where('category', '==', 'phones')).valueChanges();
        this.categories = this.firestore.collection('categories').valueChanges();
  }

}
