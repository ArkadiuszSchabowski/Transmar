import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RepositoryContract } from 'src/interfaces/repository-contract/repository-contract.interface';
import { GetByName } from 'src/interfaces/get-by-name/get-by-name.interface';

@Injectable()
export class UserRepository
  implements RepositoryContract<User>, GetByName<User>
{
  constructor(private readonly prisma: PrismaService) {}
  getByName(
    username: string,
  ): Promise<{
    id: number;
    username: string;
    passwordHash: string;
    profession: string | null;
  } | null> {
    return this.prisma.user.findUnique({ where: { username } });
  }

  async add(dto: User): Promise<void> {
    await this.prisma.user.create({ data: dto });
  }

  async getById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({ where: { id }, data });
  }

  async remove(id: number): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }
}
