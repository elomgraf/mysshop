import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SignupComponent } from './signup/signup.component';

import { LoginComponent } from './login/login.component';


import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'product', component: ProductComponent },
    { path: 'cart',          component: CartComponent },
    { path: 'categories',          component: CategoriesComponent },
     { path: 'category',          component: CategoryComponent },
    { path: 'products',          component: ProductsComponent },
    { path: 'checkout',          component: CheckoutComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
