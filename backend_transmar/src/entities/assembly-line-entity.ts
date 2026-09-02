import { Expose } from 'class-transformer';

export class AssemblyLineEntity {
  @Expose()
  id!: number;
  @Expose()
  name!: string;
  @Expose()
  active!: boolean;
  @Expose()
  productId!: number;
}
