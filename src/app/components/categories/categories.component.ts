import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  products: Observable<any[]>;
     categories: Observable<any[]>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.products = this.firestore.collection('products').valueChanges();
        this.categories = this.firestore.collection('categories').valueChanges();
  }

}