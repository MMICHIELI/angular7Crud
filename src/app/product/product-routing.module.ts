// Angular Router
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

/**
 * Routes for Product Module
 */
const productRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
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
            }
        ]
    }
];
@NgModule({
    imports: [
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }
