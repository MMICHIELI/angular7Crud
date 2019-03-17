import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Product Components
import { ProductsComponent } from './product/components/products/products.component';
import { ProductDetailComponent } from './product/components/product-detail/product-detail.component';
import { ProductAddComponent } from './product/components/product-add/product-add.component';
import { ProductEditComponent } from './product/components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'List of Products' }
  },
  {
    path: 'product-details/:id',
    component: ProductDetailComponent,
    data: { title: 'Product Details' }
  },
  {
    path: 'product-add',
    component: ProductAddComponent,
    data: { title: 'Add Product' }
  },
  {
    path: 'product-edit/:id',
    component: ProductEditComponent,
    data: { title: 'Edit Product' }
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
