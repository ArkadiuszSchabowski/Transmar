import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from 'src/entities/user-entity';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddUserDto } from 'src/models/user/add-user-dto';
import { GetUserDto } from 'src/models/user/get-user-dto';
import { UpdateUserDto } from 'src/models/user/update-user-dto';
import { UserRepository } from 'src/repositories/user-repository/user-repository';

const SALT_ROUNDS = 10;

@Injectable()
export class UserService implements ServiceContract<
  AddUserDto,
  GetUserDto,
  UpdateUserDto
> {
  constructor(private readonly userRepository: UserRepository) {}

  async add(dto: AddUserDto): Promise<void> {
    const passwordHash: string = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const user: User = plainToInstance(UserEntity, {
      ...dto,
      passwordHash,
    });

    await this.userRepository.add(user as any);
  }

  async getById(id: number): Promise<GetUserDto | null> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      return null;
    }

    return plainToInstance(GetUserDto, user, { excludeExtraneousValues: true });
  }

  async getAll(): Promise<GetUserDto[]> {
    const users = await this.userRepository.getAll();
    return plainToInstance(GetUserDto, users);
  }

  async update(
    id: number,
    data: Partial<UpdateUserDto>,
  ): Promise<UpdateUserDto> {
    const updated = await this.userRepository.update(id, data);
    return plainToInstance(UpdateUserDto, updated, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.remove(id);
  }
}
