// Angular
import { Injectable } from '@angular/core';

// Rxjs
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';

// @ngrx
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';

// Services
import { ProductApiService } from '../../services/product-api.service';

// Models
import { IAppState } from '../../../core/models/core-state.model';
import { Observable, of } from 'rxjs';

// Actions
import {
    ProductPageLoad,
    ProductActionTypes,
    ProductPageLoadSuccess,
    ProductPageLoadError,
    ProductAdd,
    ProductAddSuccess,
    ProductAddError,
    ProductDelete,
    ProductGetByID,
    ProductGetByIDSuccess
} from '../actions';
import { productPageRequestSelector } from '../reducers';

@Injectable()
export class ProductEffects {

    constructor(
        private productService: ProductApiService,
        private actions$: Actions,
        private store$: Store<IAppState>
    ) { }

    @Effect()
    loadPage$: Observable<Action> = this.actions$
        .pipe(
            ofType<ProductPageLoad>(ProductActionTypes.PRODUCT_LOAD_PAGE),
            switchMap(action => this.productService.getProducts(action.payload)
                .pipe(
                    map(page => new ProductPageLoadSuccess(page)),
                    catchError(error => of(new ProductPageLoadError(error)))
                ))
        );

    @Effect()
    getProduct$: Observable<Action> = this.actions$
        .pipe(
            ofType<ProductGetByID>(ProductActionTypes.PRODUCT_GET_BY_ID),
            switchMap(action => this.productService.getProduct(action.payload)
                .pipe(
                    map(product => new ProductGetByIDSuccess(product)),
                    catchError(error => of(new ProductPageLoadError(error)))
                ))
        );

    @Effect()
    addProduct$: Observable<Action> = this.actions$
        .pipe(
            ofType<ProductAdd>(ProductActionTypes.PRODUCT_ADD),
            switchMap(action => this.productService.addProduct(action.payload)
                .pipe(
                    map(product => new ProductAddSuccess(product)),
                    catchError(error => of(new ProductAddError(error)))
                ))
        );

    @Effect()
    pageReloadAfterAdd$: Observable<Action> = this.actions$
        .pipe(
            ofType<ProductAddSuccess>(ProductActionTypes.PRODUCT_ADD_SUCCESS),
            withLatestFrom(this.store$.select(productPageRequestSelector)),
            map(([[], pageRequest]) => {
                return new ProductPageLoad({
                    page: 0,
                    size: pageRequest.size,
                    sortProperty: pageRequest.sortProperty,
                    sortDirection: pageRequest.sortDirection
                });
            }),
            catchError(error => of(new ProductAddError(error)))
        );

    @Effect()
    deleteProduct$: Observable<Action> = this.actions$
        .pipe(
            ofType<ProductDelete>(ProductActionTypes.PRODUCT_DELETE),
            switchMap(action => this.productService.deleteProduct(action.payload)
                .pipe(
                    withLatestFrom(this.store$.select(productPageRequestSelector)),
                    map(([[], pageRequest]) => {
                        return new ProductPageLoad({
                            page: 0,
                            size: pageRequest.size,
                            sortProperty: pageRequest.sortProperty,
                            sortDirection: pageRequest.sortDirection
                        });
                    }),
                    catchError(error => of(new ProductAddError(error)))
                ))
        );
}

