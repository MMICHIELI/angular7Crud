import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

// @Ngrx
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

// Models
import { Product } from '../../models/product';
import { IAppState } from 'src/app/core/models';

// Stores
import * as fromStore from '../../store';
import { ProductGetByIDSuccess, ProductActionTypes } from '../../store';

// Action Types

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm: FormGroup;
  id: number = null;
  prodName = '';
  prodDesc = '';
  prodPrice: number = null;
  isLoadingResults = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    private action$: Actions
  ) { }

  ngOnInit() {
    this.getProduct(this.route.snapshot.params.id);
    this.productForm = this.formBuilder.group({
      prodName: [null, Validators.required],
      prodDesc: [null, Validators.required],
      prodPrice: [null, Validators.required]
    });
  }

  getProduct(id: number) {
    // Should be change and not systematically get the product from BackEND
    this.store.dispatch(new fromStore.ProductGetByID(id));
    this.action$
      .pipe(ofType<ProductGetByIDSuccess>(ProductActionTypes.PRODUCT_GET_SUCCESS))
      .subscribe(
        data => {
          this.id = data.payload.id;
          this.productForm.setValue({
            prodName: data.payload.prodName,
            prodDesc: data.payload.prodDesc,
            prodPrice: data.payload.prodPrice
          });
        }
      );
  }

  onFormSubmit(form: Product) {
    this.isLoadingResults = true;
    form.id = this.id;
    // this.productService.updateProduct(this.id, form)
    //   .subscribe(res => {
    //     const id = res.id;
    //     this.isLoadingResults = false;
    //     this.router.navigate(['products/product-details', id]);
    //   }, (err) => {
    //     console.log(err);
    //     this.isLoadingResults = false;
    //   }
    //   );
  }

  productDetails() {
    this.router.navigate(['products/product-details', this.id]);
  }
}
