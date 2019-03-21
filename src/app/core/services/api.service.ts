// Angular
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

// Rxjs
import { Observable } from 'rxjs';

// Models
import { AppConfig } from '../models/app-config.model';
import { ErrorModel } from '../models/error.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public appConfig = AppConfig;

  public header: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  public getRootUrl(): string {
    return this.appConfig.apiBaseURL;
  }

  /* HandleError function */
  public handleError<T>(response?: Response | any) {

    const errorModel: ErrorModel = new ErrorModel();

    if (response instanceof Response) {

      // Handle Connection Refuse
      if (response.status === 0 && response.ok === false) {
        errorModel.status = -1;
        errorModel.severity = errorModel.LEVEL_ERROR;
        errorModel.statusText = 'net::ERR_CONNECTION_REFUSED';
      } else {

        // handle 404, 201 etc ... here
        errorModel.status = response.status;
        if (response.status === 404) {
          errorModel.status = response.status;
          errorModel.severity = errorModel.LEVEL_WARN;
          errorModel.statusText = 'NOT FOUND';
        }
      }
    } else {

      // we don't know what the Error is exactly
      const errMsg = response.message ? response.message : response.toString();
      errorModel.severity = errorModel.LEVEL_WARN;
      errorModel.statusText = errMsg;
    }

    return Observable.throw(errorModel);
  }
}
