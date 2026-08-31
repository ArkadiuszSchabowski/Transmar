import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { RepositoryContract } from 'src/interfaces/repository-contract/repository-contract.interface';

@Injectable()
export class UserRepository implements RepositoryContract<User> {
  constructor(private readonly prisma: PrismaService) {}

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