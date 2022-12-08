/* tslint:disable */
/* eslint-disable */
import { DetallebaucherWithRelations } from './detallebaucher-with-relations';
import { EmpleadoWithRelations } from './empleado-with-relations';

/**
 * (tsType: CuentaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface CuentaWithRelations {
  detallebauchers?: Array<DetallebaucherWithRelations>;
  empleado?: EmpleadoWithRelations;
  empleadoId?: string;
  id?: string;
  nombre: string;
  tipo: string;
}
