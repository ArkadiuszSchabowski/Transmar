import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common';
import { AddUserDto } from 'src/models/user/add-user-dto';
import { GetUserDto } from 'src/models/user/get-user-dto';
import { UpdateUserDto } from 'src/models/user/update-user-dto';
import { UserService } from 'src/services/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  add(@Body() dto: AddUserDto): Promise<void> {
    return this.service.add(dto);
  }

  @Get()
  getAll(): Promise<GetUserDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): Promise<GetUserDto | null> {
    return this.service.getById(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
