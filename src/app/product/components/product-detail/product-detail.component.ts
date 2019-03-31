import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Models
import { Product } from '../../models/product';

// Services
import { ProductApiService } from '../../services/product-api.service';

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
    private productService: ProductApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params.id);
  }

  /* Function to get A Product by his id */
  getProductDetails(id: number) {
    this.productService.getProduct(id)
      .subscribe(
        data => {
          this.product = data;
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
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          this.isLoadingResults = false;
          this.router.navigate(['/products']);
        },
        err => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
