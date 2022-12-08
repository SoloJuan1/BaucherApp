/* tslint:disable */
/* eslint-disable */
import { BaucherWithRelations } from './baucher-with-relations';
import { CuentaWithRelations } from './cuenta-with-relations';

/**
 * (tsType: DetallebaucherWithRelations, schemaOptions: { includeRelations: true })
 */
export interface DetallebaucherWithRelations {
  baucher?: BaucherWithRelations;
  baucherId?: string;
  baucherid: string;
  cuenta?: CuentaWithRelations;
  cuentaId?: string;
  cuentaid: string;
  id?: string;
  valor: string;
}
