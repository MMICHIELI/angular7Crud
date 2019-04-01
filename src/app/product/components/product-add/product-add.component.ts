import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Ngrx
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

// Model
import { Product } from 'src/app/product/models/product';
import { IAppState } from 'src/app/core/models';

// Stores
import * as fromStore from '../../store';

// Action Types
import { ProductAddSuccess, ProductActionTypes } from '../../store';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {

  /* Form Variables Declaration */
  productForm: FormGroup;
  prodName = '';
  prodDesc = '';
  prodPrice: number = null;
  updatedAt: Date = null;
  isLoadingResults = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    private action$: Actions
  ) { }

  ngOnInit() {
    // Initialize Validation
    this.productForm = this.formBuilder.group({
      prodName: [null, Validators.required],
      prodDesc: [null, Validators.required],
      prodPrice: [null, Validators.required]
    });
  }

  onFormSubmit(form: Product) {
    this.isLoadingResults = true;
    form.id = null;
    this.store.dispatch(new fromStore.ProductAdd(form));
    this.action$
      .pipe(ofType<ProductAddSuccess>(ProductActionTypes.PRODUCT_ADD_SUCCESS))
      .subscribe(
        data => {
          const id = data.payload.id;
          this.isLoadingResults = false;
          this.router.navigate(['products/product-details', id]);
        }
      );
  }
}
