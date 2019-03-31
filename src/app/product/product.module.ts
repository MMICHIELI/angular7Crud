
// Angular Modules
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Application Modules
import { CoreModule } from '../core/core.module';
import { ProductRoutingModule } from './product-routing.module';
import * as fromStore from './store';

// Components
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';

@NgModule({
    imports: [
        CoreModule,
        ProductRoutingModule,
        StoreModule.forFeature('products', fromStore.reducers),
        EffectsModule.forFeature(fromStore.effects)
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
