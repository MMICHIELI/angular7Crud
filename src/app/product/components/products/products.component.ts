import { Component, OnInit } from '@angular/core';

// Model
import { Product } from '../../models/product';
import { IAppState, SortDirection } from 'src/app/core/models';

// Store
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

// Services

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['prodName', 'prodPrice'];
  data: Product[] = [];
  isLoadingResults = false;

  constructor(
    private store: Store<IAppState>
  ) {
    // Select Data from Store
    this.store
      .select(fromStore.productPageSelector)
      .subscribe(page => {
        if (page) {
          this.isLoadingResults = false;
          this.data = page.content;
        }
      });
  }

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.store.dispatch(new fromStore.ProductPageLoad({
      page: 0,
      size: 2,
      sortDirection: SortDirection.ASC,
      sortProperty: 'id'
    }));
  }
}
