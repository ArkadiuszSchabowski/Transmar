import { BadRequestException, Injectable } from '@nestjs/common';
import { NameValidatorContract } from 'src/interfaces/name-validator-contract/name-validator-contract.interface';
import { ValidatorContract } from 'src/interfaces/validator-contract/validator-contract.interface';
import { AddWorkstationDto } from 'src/models/workstation/add-workstation-dto';

const NAME_MIN_LENGTH = 3;
const NAME_MAX_LENGTH = 25;

const SHORT_NAME_MIN_LENGTH = 2;
const SHORT_NAME_MAX_LENGTH = 10;

const PC_NAME_MIN_LENGTH = 3;
const PC_NAME_MAX_LENGTH = 15;

@Injectable()
export class WorkstationValidator
  implements ValidatorContract<AddWorkstationDto>, NameValidatorContract
{
  validateDto(dto: AddWorkstationDto): void {
    this.validateName(dto.name);
    this.validateShortName(dto.shortName);
    this.validatePcName(dto.pcName);
  }

  validateName(name: string | undefined): void {
    if (!name || name.trim().length === 0) {
      throw new BadRequestException('Workstation name is required.');
    }
    const trimmedName = name.trim();
    if (
      trimmedName.length < NAME_MIN_LENGTH ||
      trimmedName.length > NAME_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Workstation name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters long.`,
      );
    }
  }

  validateShortName(shortName: string | undefined): void {
    if (!shortName || shortName.trim().length === 0) {
      throw new BadRequestException('Workstation short name is required.');
    }
    const trimmedShortName = shortName.trim();
    if (
      trimmedShortName.length < SHORT_NAME_MIN_LENGTH ||
      trimmedShortName.length > SHORT_NAME_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Workstation short name must be between ${SHORT_NAME_MIN_LENGTH} and ${SHORT_NAME_MAX_LENGTH} characters long.`,
      );
    }
  }

  validatePcName(pcName: string | undefined): void {
    if (!pcName || pcName.trim().length === 0) {
      throw new BadRequestException('Workstation PC name is required.');
    }
    const trimmedPcName = pcName.trim();
    if (
      trimmedPcName.length < PC_NAME_MIN_LENGTH ||
      trimmedPcName.length > PC_NAME_MAX_LENGTH
    ) {
      throw new BadRequestException(
        `Workstation PC name must be between ${PC_NAME_MIN_LENGTH} and ${PC_NAME_MAX_LENGTH} characters long.`,
      );
    }
  }
}