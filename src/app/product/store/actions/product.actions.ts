// Ngrx
import { Action } from '@ngrx/store';

// Models
import * as models from '../../models';
import { IPage, ErrorModel, IPageRequest } from '../../../core/models';

/**
 * Product Action Types
 */
export enum ProductActionTypes {
    PRODUCT_LOAD_PAGE = '[PRODUCT] Product Load Page',
    PRODUCT_LOAD_PAGE_SUCCESS = '[PRODUCT] Product Load Page Success',
    PRODUCT_LOAD_PAGE_ERROR = '[PRODUCT] Product Load Page Error',
    PRODUCT_GET_BY_ID = '[PRODUCT] Product Get By Id',
    PRODUCT_GET_SUCCESS = '[PRODUCT] Product Get By Id Success',
    PRODUCT_GET_ERROR = '[PRODUCT] Product Get By Id Error',
    PRODUCT_ADD = '[PRODUCT] Product Add',
    PRODUCT_ADD_SUCCESS = '[PRODUCT] Product Add Success',
    PRODUCT_ADD_ERROR = '[PRODUCT] Product Add Error',
    PRODUCT_DELETE = '[PRODUCT] Product Delete',
    PRODUCT_DELETE_ERROR = '[PRODUCT] Product Delete Error'
}

export class ProductPageLoad implements Action {
    readonly type = ProductActionTypes.PRODUCT_LOAD_PAGE;
    constructor(public payload: IPageRequest) { }
}

export class ProductPageLoadSuccess implements Action {
    readonly type = ProductActionTypes.PRODUCT_LOAD_PAGE_SUCCESS;
    constructor(public payload: IPage<models.Product>) { }
}

export class ProductPageLoadError implements Action {
    readonly type = ProductActionTypes.PRODUCT_LOAD_PAGE_ERROR;
    constructor(public payload: ErrorModel) { }
}

/* ==================== GET by id ================================================ */

export class ProductGetByID implements Action {
    readonly type = ProductActionTypes.PRODUCT_GET_BY_ID;
    constructor(public payload: number) { }
}

export class ProductGetByIDSuccess implements Action {
    readonly type = ProductActionTypes.PRODUCT_GET_SUCCESS;
    constructor(public payload: models.Product) { }
}

export class ProductGetByIDError implements Action {
    readonly type = ProductActionTypes.PRODUCT_GET_ERROR;
    constructor(public payload: ErrorModel) { }
}

/* ==================== ADD ================================================ */

export class ProductAdd implements Action {
    readonly type = ProductActionTypes.PRODUCT_ADD;
    constructor(public payload: models.Product) { }
}

export class ProductAddSuccess implements Action {
    readonly type = ProductActionTypes.PRODUCT_ADD_SUCCESS;
    constructor(public payload: models.Product) { }
}

export class ProductAddError implements Action {
    readonly type = ProductActionTypes.PRODUCT_ADD_ERROR;
    constructor(public payload: ErrorModel) { }
}

/* ==================== DELETE ================================================ */

export class ProductDelete implements Action {
    readonly type = ProductActionTypes.PRODUCT_DELETE;
    constructor(public payload: number) { }
}

export class ProductDeleteError implements Action {
    readonly type = ProductActionTypes.PRODUCT_DELETE_ERROR;
    constructor(public payload: ErrorModel) { }
}

/* Types */
export type ProductActions =
    ProductPageLoad
    | ProductPageLoadSuccess
    | ProductPageLoadError
    | ProductGetByID
    | ProductGetByIDSuccess
    | ProductGetByIDError
    | ProductAdd
    | ProductAddSuccess
    | ProductAddError
    | ProductDelete
    | ProductDeleteError;
