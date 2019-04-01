import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// @ngrx
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

// Models
import { Product } from '../../models/product';
import { IAppState } from 'src/app/core/models';

// Stores
import * as fromStore from '../../store';

// Action Types
import {
  ProductGetByIDSuccess,
  ProductActionTypes,
  ProductDelete
} from '../../store';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  // Declaration InitialState
  product: Product = { id: null, prodName: '', prodDesc: '', prodPrice: null, updatedAt: null };
  isLoadingResults = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<IAppState>,
    private action$: Actions
  ) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params.id);
  }

  /* Function to get A Product by his id */
  getProductDetails(id: number) {
    // Dispatching the action
    this.store.dispatch(new fromStore.ProductGetByID(id));
    // Listening to the action
    this.action$
      .pipe(ofType<ProductGetByIDSuccess>(ProductActionTypes.PRODUCT_GET_SUCCESS))
      .subscribe(
        data => {
          this.product = data.payload;
          this.isLoadingResults = false;
        }
      );

  }

  /* Function to navigate */
  editProduct(id: number) {
    this.router.navigate(['/products/product-edit', id]);
  }

  /* Function to delete A Product by his id */
  deleteProduct(id: number) {
    this.isLoadingResults = true;
    this.store.dispatch(new fromStore.ProductDelete(id))
    this.action$
      .pipe(ofType<ProductDelete>(ProductActionTypes.PRODUCT_DELETE))
      .subscribe(
        res => {
          this.isLoadingResults = false;
          this.router.navigate(['/products']);
        }
      );
  }
}
