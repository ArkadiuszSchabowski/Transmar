import { Expose } from "class-transformer";

export class UserEntity {
  @Expose()
  id!: number;
  @Expose()
  name!: string;
  @Expose()
  passwordHash!: string;
  @Expose()
  profession!: string | null;
}
