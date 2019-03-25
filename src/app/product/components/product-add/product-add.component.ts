import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Model
import { Product } from 'src/app/product/models/product';

// Services
import { ProductApiService } from '../../services/product-api.service';

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
    private productService: ProductApiService,
    private formBuilder: FormBuilder
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
    this.productService.addProduct(form)
      .subscribe(
        res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['products/product-details', id]);
        },
        err => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
