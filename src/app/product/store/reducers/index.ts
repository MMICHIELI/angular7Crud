// Ngrx
import { createSelector, createFeatureSelector, ActionReducerMap, Action } from '@ngrx/store';

// Models
import { IProductModuleState } from '../../models';

// Reducers
import { ProductReducer } from './product.reducer';
import { IPage } from 'src/app/core/models';

export const reducers: ActionReducerMap<IProductModuleState> = {
    products: ProductReducer
};

/* =============================== Feature Selector =========================== */
export const productModuleStateSelector = createFeatureSelector<IProductModuleState>('products');

/* =============================== Product Selectors =========================== */

export const productStateSelector = createSelector(
    productModuleStateSelector,
    state => state.products
);

export const productPageRequestSelector = createSelector(
    productStateSelector,
    state => state.pageRequest
);

export const productPageSelector = createSelector(
    productStateSelector,
    state => state.data
);

export const productPageLoadSuccessSelector = createSelector(
    productStateSelector,
    state => state.success
);

export const productAddSelector = createSelector(
    productStateSelector,
    state => state.data
);

export const productDeleteSelector = createSelector(
    productStateSelector,
    state => state.data
);
