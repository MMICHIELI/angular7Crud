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
    loading?: boolean;
    success?: boolean;
    data?: IPage<Product>;
    error?: ErrorModel;
}
