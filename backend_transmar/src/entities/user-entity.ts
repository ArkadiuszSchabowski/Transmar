import { Expose } from "class-transformer";

export class UserEntity {
  @Expose()
  id!: number;
  @Expose()
  username!: string;
  @Expose()
  passwordHash!: string;
  @Expose()
  profession!: string | null;
}
