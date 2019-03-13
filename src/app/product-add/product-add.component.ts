import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Product } from '../product';

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
    private api: ApiService,
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
    console.log('Form: ', form);
    this.api.addProduct(form)
      .subscribe(
        res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/product-details', id]);
        },
        err => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
