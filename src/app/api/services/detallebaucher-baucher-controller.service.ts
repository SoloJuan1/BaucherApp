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

import { Baucher } from '../models/baucher';

@Injectable({
  providedIn: 'root',
})
export class DetallebaucherBaucherControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation detallebaucherBaucherControllerGetBaucher
   */
  static readonly DetallebaucherBaucherControllerGetBaucherPath = '/detallebauchers/{id}/baucher';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getBaucher()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBaucher$Response(params: {
    id: string;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<Baucher>>> {

    const rb = new RequestBuilder(this.rootUrl, DetallebaucherBaucherControllerService.DetallebaucherBaucherControllerGetBaucherPath, 'get');
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
        return r as StrictHttpResponse<Array<Baucher>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getBaucher$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getBaucher(params: {
    id: string;
    context?: HttpContext
  }
): Observable<Array<Baucher>> {

    return this.getBaucher$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Baucher>>) => r.body as Array<Baucher>)
    );
  }

}
