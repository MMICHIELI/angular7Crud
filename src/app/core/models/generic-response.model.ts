export interface IGenericResponse<T> {
    status: string;
    message: string;
    data: T;
}
