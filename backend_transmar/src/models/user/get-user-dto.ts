import { Expose } from "class-transformer";

export class GetUserDto {
  @Expose()
  id!: number;
  @Expose()
  username!: string;
  @Expose()
  profession!: string | null;
}
