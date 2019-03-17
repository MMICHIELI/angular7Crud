// Angular Modules
import { NgModule } from '@angular/core';

// Application Modules
import { SharedModule } from '../shared/shared.module';

// Components
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        ProductsComponent,
        ProductDetailComponent,
        ProductAddComponent,
        ProductEditComponent
    ],
    exports: [
        SharedModule
    ]
})

export class ProductModule { }
