export class ErrorModel {

    public LEVEL_WARN = 'WARNING';
    public LEVEL_ERROR = 'Error';
    public status = 0;
    public toast = '';
    public severity = '';
    public parameters: Array<string> = [];
    public statusText = '';
}
