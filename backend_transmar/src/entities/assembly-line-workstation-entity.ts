import { Expose } from 'class-transformer';

export class AssemblyLineWorkstationEntity {
  @Expose()
  id!: number;
  @Expose()
  assemblyLineId!: number;
  @Expose()
  workstationId!: number;
  @Expose()
  order!: number;
}