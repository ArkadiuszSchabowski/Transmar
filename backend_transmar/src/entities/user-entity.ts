export class UserEntity {
  id!: number;
  username!: string;
  passwordHash!: string;
  profession!: string | null;
}