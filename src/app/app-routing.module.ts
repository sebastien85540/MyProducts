import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {AddProductsComponent} from "./products/add-products/add-products.component";
import {ListProductsComponent} from "./products/list-products/list-products.component";
import {UpdateProductComponent} from "./products/update-product/update-product.component";

const routes: Routes = [
  {path: "produits", component: ProductsComponent, children: [
      {path: "add", component: AddProductsComponent},
      {path: "list", component: ListProductsComponent},
      {path: "updateProduct/:id", component: UpdateProductComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
