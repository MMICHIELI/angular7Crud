// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Observable
import { Observable } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

// Models
import { Product } from '../models/product';
import { IGenericResponse } from 'src/app/core/models/generic-response.model';
import { IPage } from 'src/app/core/models/pagination.model';

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
    public getProducts(): Observable<IPage<Product>> {

        return this.http.get<IGenericResponse<IPage<Product>>>(this.apiProduct)
            .pipe(map((response: IGenericResponse<IPage<Product>>) => response.data))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Get Product By id */
    getProduct(id: number): Observable<Product> {
        const url = `${this.apiProduct}/${id}`;

        return this.http.get<IGenericResponse<Product>>(url)
            .pipe(map((response: IGenericResponse<Product>) => response.data))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Add a Product */
    addProduct(product: Product): Observable<Product> {

        return this.http.post<IGenericResponse<Product>>(this.apiProduct, product)
            .pipe(map((response: IGenericResponse<Product>) => response.data))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Update an existing Product */
    updateProduct(id: number, product: Product): Observable<Product> {
        const url = `${this.apiProduct}/${id}`;

        return this.http.put<IGenericResponse<Product>>(url, product)
            .pipe(map((response: IGenericResponse<Product>) => response.data))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }

    /* Delete a Product */
    deleteProduct(id: number): Observable<string> {
        const url = `${this.apiProduct}/${id}`;

        return this.http.delete<IGenericResponse<Product>>(url)
            .pipe(map((response: IGenericResponse<Product>) => response.message))
            .pipe(retry(this.appConfig.retryCount), catchError(this.handleError));
    }
}
