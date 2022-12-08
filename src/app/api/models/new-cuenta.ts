/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Cuenta, 'id'>, schemaOptions: { title: 'NewCuenta', exclude: [ 'id' ] })
 */
export interface NewCuenta {
  empleadoId?: string;
  nombre: string;
  tipo: string;
}
