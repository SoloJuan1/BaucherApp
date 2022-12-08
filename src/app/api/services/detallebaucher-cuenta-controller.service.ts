/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { Cuenta } from '../models/cuenta';

@Injectable({
  providedIn: 'root',
})
export class DetallebaucherCuentaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation detallebaucherCuentaControllerGetCuenta
   */
  static readonly DetallebaucherCuentaControllerGetCuentaPath = '/detallebauchers/{id}/cuenta';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCuenta()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCuenta$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Cuenta>>> {

    const rb = new RequestBuilder(this.rootUrl, DetallebaucherCuentaControllerService.DetallebaucherCuentaControllerGetCuentaPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Cuenta>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCuenta$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCuenta(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Cuenta>> {

    return this.getCuenta$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Cuenta>>) => r.body as Array<Cuenta>)
    );
  }

}
