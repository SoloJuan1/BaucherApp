/* tslint:disable */
/* eslint-disable */
import { CuentaWithRelations } from './cuenta-with-relations';

/**
 * (tsType: EmpleadoWithRelations, schemaOptions: { includeRelations: true })
 */
export interface EmpleadoWithRelations {
  codigoEmpleado: string;
  cuentas?: Array<CuentaWithRelations>;
  id: string;
  nombre: string;
  sueldo: string;
}
