import {Component, OnInit} from '@angular/core';
import {ProductClass} from "../../Classes/product-class";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{

  products: ProductClass[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProductsList().subscribe(prods => {
      this.products = prods;
    })
  }
  deleteProduct(product: ProductClass) {
    let conf = confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")
    if (conf){
      this.productService.deleteProductById(product.productId).subscribe(() => {
        console.log("produit supprimé")
        this.getProducts();
      })
    }
  }

}
