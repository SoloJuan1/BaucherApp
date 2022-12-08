/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { BaucherControllerService } from './services/baucher-controller.service';
import { BaucherDetallebaucherControllerService } from './services/baucher-detallebaucher-controller.service';
import { CuentaControllerService } from './services/cuenta-controller.service';
import { CuentaDetallebaucherControllerService } from './services/cuenta-detallebaucher-controller.service';
import { CuentaEmpleadoControllerService } from './services/cuenta-empleado-controller.service';
import { DetallebaucherControllerService } from './services/detallebaucher-controller.service';
import { DetallebaucherBaucherControllerService } from './services/detallebaucher-baucher-controller.service';
import { DetallebaucherCuentaControllerService } from './services/detallebaucher-cuenta-controller.service';
import { EmpleadoControllerService } from './services/empleado-controller.service';
import { EmpleadoCuentaControllerService } from './services/empleado-cuenta-controller.service';
import { PingControllerService } from './services/ping-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    BaucherControllerService,
    BaucherDetallebaucherControllerService,
    CuentaControllerService,
    CuentaDetallebaucherControllerService,
    CuentaEmpleadoControllerService,
    DetallebaucherControllerService,
    DetallebaucherBaucherControllerService,
    DetallebaucherCuentaControllerService,
    EmpleadoControllerService,
    EmpleadoCuentaControllerService,
    PingControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
