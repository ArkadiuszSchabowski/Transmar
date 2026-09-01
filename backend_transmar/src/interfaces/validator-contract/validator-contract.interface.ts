export interface ValidatorContract<TDto extends object> {
  validateDto(dto: TDto): void;
}
