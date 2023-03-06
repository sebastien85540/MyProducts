import { Injectable } from '@angular/core';
import {ProductClass} from "../Classes/product-class";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../Classes/category";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL: string = "http://localhost:8080/produits/api";
  // categories: Category[];
  constructor(private http: HttpClient) {}

getProductsList(): Observable<ProductClass[]>{
    return this.http.get<ProductClass[]>(this.apiURL);
}

addProduct(prod: ProductClass): Observable<ProductClass>{
  return this.http.post<ProductClass>(this.apiURL, prod, httpOptions);
}

deleteProductById(productId: number){
  const url = `${this.apiURL}/${productId}`;
  console.log(url);
  return this.http.delete(url, httpOptions);
}

updateProduct(product: ProductClass){
  return this.http.put<ProductClass>(this.apiURL, product, httpOptions);
}

  getProduct(productId: number) {
    const url = `${this.apiURL}/${productId}`;
    return this.http.get<ProductClass>(url);
  }

}
