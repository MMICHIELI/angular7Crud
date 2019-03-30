/**
 * Types Exported for pagination
 */
export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface ISort {
    property: string;
    direction: SortDirection;
}

export interface IPageRequest {
    page?: number;
    size?: number;
    sortProperty?: string;
    sortDirection?: SortDirection;
}

export interface IPage<T> {
    content?: Array<T>;
    last?: boolean;
    first?: boolean;
    totalPages?: number;
    totalElements?: number;
    size?: number;
    number?: number;
    sort?: Array<ISort>;
}

export interface IAngularDTPageRequest {
    offset: number;
    limit: number;
    sortBy?: string;
    sortAsc?: boolean;
}
