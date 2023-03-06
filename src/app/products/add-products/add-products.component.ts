import {Component, OnInit} from '@angular/core';
import {ProductClass} from "../../Classes/product-class";
import {ProductService} from "../../services/product.service";
import {timeInterval} from "rxjs";
import {Category} from "../../Classes/category";
import {Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit{
  newProduct = new ProductClass();
  message = "";
  success = false;

  categories!: Category[];
  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router) {
  }
  ngOnInit(): void {
    this.clearProduct();
    this.categoryService.getCategoriesList().subscribe((cat) => {
      this.categories = cat;
    })
  }
  addProduct(){
    if (this.newProduct.productName != null){
      this.productService.addProduct(this.newProduct).subscribe(prod => {
      this.success = true;
      this.message = "enregistrement reussi";
      this.router.navigate(['/produits/list']);
      this.clearProduct();
      });
    } else {
      this.success = false
      this.message = "l'enregistrement a échoué";
    }
  }

  clearProduct(){
    this.newProduct = new ProductClass();
  }

}
