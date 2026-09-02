import { BadRequestException, Injectable } from '@nestjs/common';
import { NameValidatorContract } from 'src/interfaces/name-validator-contract/name-validator-contract.interface';
import { ValidatorContract } from 'src/interfaces/validator-contract/validator-contract.interface';
import { AddAssemblyLineDto } from 'src/models/assembly-line/add-assembly-line-dto';

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 25;

@Injectable()
export class AssemblyLineValidator
  implements ValidatorContract<AddAssemblyLineDto>, NameValidatorContract
{
  validateDto(dto: AddAssemblyLineDto): void {
    this.validateName(dto.name);
    this.validateProductId(dto.productId);
  }

  validateName(name: string | undefined): void {
    if (!name || name.trim().length === 0) {
      throw new BadRequestException('Assembly line name is required.');
    }
    const trimmedName = name.trim();
    if (
      trimmedName.length < NAME_MIN_LENGTH ||
      trimmedName.length > NAME_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Assembly line name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters long.`,
      );
    }
  }

  validateProductId(productId: number | undefined): void {
    if (productId === undefined || productId === null) {
      throw new BadRequestException('Product id is required.');
    }
    if (!Number.isInteger(productId) || productId <= 0) {
      throw new BadRequestException('Product id must be a positive number.');
    }
  }
}