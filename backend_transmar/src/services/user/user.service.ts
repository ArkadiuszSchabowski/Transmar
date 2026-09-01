import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';
import { UserEntity } from 'src/entities/user-entity';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddUserDto } from 'src/models/user/add-user-dto';
import { GetUserDto } from 'src/models/user/get-user-dto';
import { UpdateUserDto } from 'src/models/user/update-user-dto';
import { UserRepository } from 'src/repositories/user-repository/user-repository';
import { UserValidator } from 'src/validators/user-validator';

const SALT_ROUNDS = 10;

@Injectable()
export class UserService implements ServiceContract<
  AddUserDto,
  GetUserDto,
  UpdateUserDto
> {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userValidator: UserValidator,
  ) {}

  async add(dto: AddUserDto): Promise<void> {
    this.userValidator.validateDto(dto);
    const passwordHash: string = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const user = plainToInstance(
      UserEntity,
      {
        ...dto,
        passwordHash,
      },
      { excludeExtraneousValues: true },
    );

    try {
      await this.userRepository.add(user as any);
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Username '${dto.username}' is already taken.`,
        );
      }
      throw error;
    }
  }

  async getById(id: number): Promise<GetUserDto | null> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }

    return plainToInstance(GetUserDto, user, { excludeExtraneousValues: true });
  }

  async getAll(): Promise<GetUserDto[]> {
    const users = await this.userRepository.getAll();
    return plainToInstance(GetUserDto, users, {
      excludeExtraneousValues: true,
    });
  }

  async update(
    id: number,
    data: Partial<UpdateUserDto>,
  ): Promise<UpdateUserDto> {
    this.userValidator.validateProfession(data.profession!);
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }

    const updatedUser = plainToInstance(
      UserEntity,
      {
        ...user,
        ...data,
      },
      { excludeExtraneousValues: true },
    );

    const updated = await this.userRepository.update(id, updatedUser);
    return plainToInstance(UpdateUserDto, updated, {
      excludeExtraneousValues: true,
    });
  }

  async remove(id: number): Promise<void> {
    const user = await this.userRepository.getById(id);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }

    await this.userRepository.remove(id);
  }
}
