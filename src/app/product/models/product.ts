import { IPageRequest, IPage } from 'src/app/core/models/pagination.model';
import { ErrorModel } from 'src/app/core/models/error.model';

/**
 * Product Types
 */
export class Product {
    id: number;
    prodName: string;
    prodDesc: string;
    prodPrice: number;
    updatedAt: Date;
}

export interface IProductState {
    pageRequest?: IPageRequest;
    byId?: number;
    loading?: boolean;
    success?: boolean;
    data?: IPage<Product>;
    product?: Product;
    error?: ErrorModel;
}

// Module State
export interface IProductModuleState {
    products: IProductState;
}
