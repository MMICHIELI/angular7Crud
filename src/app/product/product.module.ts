
// Angular Modules
import { NgModule } from '@angular/core';

// Application Modules
import { CoreModule } from '../core/core.module';
import { ProductRoutingModule } from './product-routing.module';

// Components
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


@NgModule({
    imports: [
        CoreModule,
        ProductRoutingModule
    ],
    declarations: [
        // Components
        ProductsComponent,
        ProductDetailComponent,
        ProductAddComponent,
        ProductEditComponent
    ],
    exports: [
        // Components
        ProductsComponent,
        ProductDetailComponent,
        ProductAddComponent,
        ProductEditComponent
    ]
})

export class ProductModule { }
