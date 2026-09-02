import { Expose } from 'class-transformer';

export class ProductEntity {
  @Expose()
  id!: number;
  @Expose()
  name!: string;
}
