// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Observable
import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

// Models
import { Product } from '../models/product';

// Services
import { ApiService } from '../../core/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class ProductApiService extends ApiService {

    public apiProduct = `${this.appConfig.apiBaseURL}/products`;

    // Inject HttpClient
    constructor(
        private http: HttpClient
    ) {
        super();
    }

    /* Get (List) Products Method */
    public getProducts(): Observable<Product[]> {

        return this.http.get<Product[]>(this.apiProduct)
            .pipe(map((response: Product[]) => response))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Get Product By id */
    getProduct(id: number): Observable<Product> {
        const url = `${this.apiProduct}/${id}`;

        return this.http.get<Product>(url)
            .pipe(map((response: Product) => response))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Add a Product */
    addProduct(product: Product): Observable<Product> {

        return this.http.post<Product>(this.apiProduct, product)
            .pipe(map((response: Product) => response))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Update an existing Product */
    updateProduct(id: number, product: Product): Observable<Product> {
        const url = `${this.apiProduct}`;

        return this.http.put<Product>(url, product)
            .pipe(map((response: Product) => response))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Delete a Product */
    deleteProduct(id: number): Observable<Product> {
        const url = `${this.apiProduct}/${id}`;

        return this.http.delete<Product>(url)
            .pipe(map((response: Product) => response))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }
}