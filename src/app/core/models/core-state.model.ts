import { IProductModuleState, Product } from 'src/app/product/models';
import { IPage } from '.';

/**
 * Examples of Core States
 */
export interface ILangState {
    name: string;
}

export interface IMenuState {
    expanded: boolean;
    currentMenu: string;
}

export interface ICoreState {
    lang: ILangState;
    menu: IMenuState;
}

export interface IAppState {
    core: ICoreState;
    product: IProductModuleState;
}
