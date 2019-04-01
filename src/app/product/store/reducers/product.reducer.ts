// Actions
import { ProductActions, ProductActionTypes } from '../actions';

// Models
import * as models from '../../models';
import { SortDirection, IPage, IPageRequest } from '../../../core/models';

const newState = (
    state: models.IProductState, newData: models.IProductState
): models.IProductState => {
    return { ...state, ...newData };
};

const initialState: models.IProductState = {
    pageRequest: {
        page: 0,
        size: 10,
        sortProperty: 'id',
        sortDirection: SortDirection.ASC
    },
    loading: false,
    success: false,
    data: null
};

export function ProductReducer(
    state: models.IProductState = initialState,
    action: ProductActions
) {
    switch (action.type) {
        case ProductActionTypes.PRODUCT_LOAD_PAGE: {
            const newData: models.IProductState = {
                pageRequest: action.payload as IPageRequest,
                loading: true,
            };
            return newState(state, newData);
        }
        case ProductActionTypes.PRODUCT_LOAD_PAGE_SUCCESS: {
            const newData: models.IProductState = {
                data: action.payload as IPage<models.Product>,
                loading: false,
                success: true
            };
            return newState(state, newData);
        }
        case ProductActionTypes.PRODUCT_LOAD_PAGE_ERROR: {
            const newData: models.IProductState = {
                data: null,
                loading: false,
                success: true,
                error: action.payload
            };
            return newState(state, newData);
        }
        case ProductActionTypes.PRODUCT_GET_BY_ID: {
            const newData: models.IProductState = {
                byId: action.payload,
                loading: true
            };
            return newState(state, newData);
        }
        case ProductActionTypes.PRODUCT_GET_SUCCESS: {
            const newData: models.IProductState = {
                product: action.payload as models.Product,
                loading: false,
                success: true
            };
            return newState(state, newData);
        }
        case ProductActionTypes.PRODUCT_GET_ERROR: {
            const newData: models.IProductState = {
                product: null,
                loading: false,
                success: true,
                error: action.payload
            };
            return newState(state, newData);
        }
        case ProductActionTypes.PRODUCT_ADD_ERROR: {
            const newData: models.IProductState = {
                data: null,
                loading: false,
                success: true,
                error: action.payload
            };
            return newState(state, newData);
        }
        case ProductActionTypes.PRODUCT_DELETE_ERROR: {
            const newData: models.IProductState = {
                data: null,
                loading: false,
                success: true,
                error: action.payload
            };
            return newState(state, newData);
        }
        default:
            return state;
    }
}
