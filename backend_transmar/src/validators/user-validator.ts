import { BadRequestException, Injectable } from '@nestjs/common';
import { ProfessionContract } from 'src/interfaces/profession-contract/profession-contract.interface';
import { ValidatorContract } from 'src/interfaces/validator-contract/validator-contract.interface';
import { AddUserDto } from 'src/models/user/add-user-dto';

const USERNAME_MIN_LENGTH = 3;
const USERNAME_MAX_LENGTH = 25;
const PASSWORD_MIN_LENGTH = 3;
const PASSWORD_MAX_LENGTH = 25;
const PROFESSION_MIN_LENGTH = 3;
const PROFESSION_MAX_LENGTH = 50;

@Injectable()
export class UserValidator
  implements ValidatorContract<AddUserDto>, ProfessionContract
{
  validateDto(dto: AddUserDto): void {
    if (!dto.username || dto.username.trim().length === 0) {
      throw new BadRequestException('Username is required.');
    }

    const trimmedUsername = dto.username.trim();
    if (
      trimmedUsername.length < USERNAME_MIN_LENGTH ||
      trimmedUsername.length > USERNAME_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Username must be between ${USERNAME_MIN_LENGTH} and ${USERNAME_MAX_LENGTH} characters long.`,
      );
    }

    if (!dto.password) {
      throw new BadRequestException('Password is required.');
    }

    if (
      dto.password.length < PASSWORD_MIN_LENGTH ||
      dto.password.length > PASSWORD_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Password must be between ${PASSWORD_MIN_LENGTH} and ${PASSWORD_MAX_LENGTH} characters long.`,
      );
    }
  }

  validateProfession(profession: string): void {
    if (profession === null || profession === undefined) {
      return;
    }

    const trimmed = profession.trim();

    if (
      trimmed.length < PROFESSION_MIN_LENGTH ||
      trimmed.length > PROFESSION_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Profession must be between ${PROFESSION_MIN_LENGTH} and ${PROFESSION_MAX_LENGTH} characters long.`,
      );
    }
  }
}
