/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Cuenta, 'id'>, 'empleadoId'>, schemaOptions: { title: 'NewCuentaInEmpleado', exclude: [ 'id' ], optional: [ 'empleadoId' ] })
 */
export interface NewCuentaInEmpleado {
  empleadoId?: string;
  nombre: string;
  tipo: string;
}
