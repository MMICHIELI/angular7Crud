// Angular Modules
import { NgModule, Optional, SkipSelf } from '@angular/core';

// Redux
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { localStorageSync } from 'ngrx-store-localstorage';
import { environment } from 'src/environments/environment.prod';

const reducers = {
    router: routerReducer
};
const effects = [];

export function logger(reducer: ActionReducer<any>): any {
    return storeLogger()(reducer);
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: ['core', 'product'], rehydrate: true })(reducer);
}

export const metaReducers = !environment.production ? [localStorageSyncReducer] : [localStorageSyncReducer, logger, storeFreeze];
/**
 * Root Module for Ngrx
 */
@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreRouterConnectingModule.forRoot({
            stateKey: 'router'
        }),
        EffectsModule.forRoot(effects)
    ],
    exports: [
        StoreModule,
        EffectsModule
    ]
})
export class StateManagementModule {

    constructor(@Optional() @SkipSelf() parentModule: StateManagementModule) {
        if (parentModule) {
            throw new Error(
                'Root StateManagementModule is already loaded ! Import it in the Application Module'
            );
        }
    }
}
