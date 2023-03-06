import { Injectable } from '@angular/core';
import {Category} from "../Classes/category";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

    apiURL: string = "http://localhost:8080/produits/api/categories"
  constructor(private http: HttpClient) { }

getCategoriesList(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiURL);
  }
}
