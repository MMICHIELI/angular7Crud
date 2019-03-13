import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Product } from './product';

/* Constants required before the @Injectable */
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'http://localhost:9001/products/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Inject HttpClient
  constructor(
    private http: HttpClient
  ) { }

  /* HandleError function */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* Get (List) Products Method */
  public getProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(apiUrl, httpOptions)
      .pipe(
        tap(_ => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }

  /* Get Product By id */
  getProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;

    return this.http.get<Product>(url)
      .pipe(
        tap(_ => console.log(`fetched product id=${id}`)),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }

  /* Add a Product */
  addProduct(product: Product): Observable<Product> {

    return this.http.post<Product>(apiUrl, product, httpOptions)
      .pipe(
        tap((result: Product) => console.log(`added product w/ id=${result.id}`)),
        catchError(this.handleError<Product>('addProduct'))
      );
  }

  /* Update an existing Product */
  updateProduct(id: number, product: Product): Observable<any> {
    const url = `${apiUrl}/${id}`;

    return this.http.put(url, product, httpOptions)
      .pipe(
        tap(_ => console.log(`updated product id=${id}`)),
        catchError(this.handleError<any>('updateProduct'))
      );
  }

  /* Delete a Product */
  deleteProduct(id: number): Observable<Product> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions)
      .pipe(
        tap(_ => console.log(`deleted product id=${id}`)),
        catchError(this.handleError<Product>('deleteProduct'))
      );
  }
}
