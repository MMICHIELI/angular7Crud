import { Component, OnInit } from '@angular/core';

// Model
import { Product } from '../../models/product';

// Services
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['prodName', 'prodPrice'];
  data: Product[] = [];
  isLoadingResults = true;

  constructor(private productService: ProductApiService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.isLoadingResults = false;
        },
        err => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
