import {Component, OnInit} from '@angular/core';
import {ProductClass} from "../../Classes/product-class";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../../Classes/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{

  product = new ProductClass();
  categories!: Category[];

  constructor(private productService: ProductService, private categoryService: CategoryService,
              private activateRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.getProduct(this.activateRoute.snapshot.params['id']);
    this.categoryService.getCategoriesList().subscribe((cat) => {
      this.categories = cat;
    })
  }

getProduct(productId: number){
    this.productService.getProduct(productId).subscribe((prod) => {
      this.product = prod;
    });
}


  updateProduct(product: ProductClass){
    this.productService.updateProduct(product).subscribe((prop) => {
      this.route.navigate(['/produits/list']);
    });
  }
}
