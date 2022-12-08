/* tslint:disable */
/* eslint-disable */
import { DetallebaucherWithRelations } from './detallebaucher-with-relations';

/**
 * (tsType: BaucherWithRelations, schemaOptions: { includeRelations: true })
 */
export interface BaucherWithRelations {
  detallebauchers?: Array<DetallebaucherWithRelations>;
  empleadoid: string;
  fecha: string;
  id?: string;
}
