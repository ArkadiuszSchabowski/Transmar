import { BadRequestException, Injectable } from '@nestjs/common';
import { NameValidatorContract } from 'src/interfaces/name-validator-contract/name-validator-contract.interface';
import { ValidatorContract } from 'src/interfaces/validator-contract/validator-contract.interface';
import { AddProductDto } from 'src/models/product/add-product-dto';

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 25;

@Injectable()
export class ProductValidator implements ValidatorContract<AddProductDto>, NameValidatorContract {
  validateDto(dto: AddProductDto): void {
    this.validateName(dto.name);
  }

  validateName(name: string | undefined): void {
    if (!name || (name === undefined) || name.trim().length === 0) {
      throw new BadRequestException('Product name is required.');
    }
    const trimmedName = name.trim();
    if (
      trimmedName.length < NAME_MIN_LENGTH ||
      trimmedName.length > NAME_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Product name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters long.`,
      );
    }
  }
}
