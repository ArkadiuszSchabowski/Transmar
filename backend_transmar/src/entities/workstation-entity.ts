import { Expose } from 'class-transformer';

export class WorkstationEntity {
  @Expose()
  id!: number;
  @Expose()
  name!: string;
  @Expose()
  shortName!: string;
  @Expose()
  pcName!: string;
}
