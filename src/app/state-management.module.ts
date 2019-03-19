import { routerReducer } from '@ngrx/router-store';
import { ActionReducer } from '@ngrx/store';

const reducers = {
    router: routerReducer
};
const effects = [];

export function logger(reducer: ActionReducer<any>): any {
    return storeLogger()(reducer);
}
/**
 * Root Module for Ngrx
 */