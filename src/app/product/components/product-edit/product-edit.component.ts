import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

// Models
import { Product } from '../../models/product';

// Services
import { ProductApiService } from '../../product-api.service';


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
    private productService: ProductApiService,
    private formBuilder: FormBuilder
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
    this.productService.getProduct(id).subscribe(data => {
      this.id = data.id;
      this.productForm.setValue({
        prodName: data.prodName,
        prodDesc: data.prodDesc,
        prodPrice: data.prodPrice
      });
    });
  }

  onFormSubmit(form: Product) {
    this.isLoadingResults = true;
    this.productService.updateProduct(this.id, form)
      .subscribe(res => {
        const id = res.id;
        this.isLoadingResults = false;
        this.router.navigate(['/product-details', id]);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

  productDetails() {
    this.router.navigate(['/product-details', this.id]);
  }
}
