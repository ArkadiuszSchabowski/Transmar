import { Expose } from "class-transformer";

export class GetProductDto {
  @Expose()
  id!: number;
  @Expose()
  name!: string;
}
