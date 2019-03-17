// Modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Application Modules
import { CoreModule } from './core/core.module';
import { ProductModule } from './product/product.module';

// Root Component
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
