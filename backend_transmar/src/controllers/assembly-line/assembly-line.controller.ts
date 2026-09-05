import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AddAssemblyLineDto } from 'src/models/assembly-line/add-assembly-line-dto';
import { GetAssemblyLineDto } from 'src/models/assembly-line/get-assembly-line-dto';
import { UpdateAssemblyLineDto } from 'src/models/assembly-line/update-assembly-line-dto';
import { AssemblyLineService } from 'src/services/assembly-line/assembly-line.service';

@Controller('assembly-line')
export class AssemblyLineController {
  constructor(private readonly service: AssemblyLineService) {}

  @Post()
  add(@Body() dto: AddAssemblyLineDto): Promise<void> {
    return this.service.add(dto);
  }

  @Get()
  getAll(): Promise<GetAssemblyLineDto[]> {
    return this.service.getAll();
  }

  @Get(':id')
  getById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<GetAssemblyLineDto | null> {
    return this.service.getById(id);
  }

  @Get('by-product/:name')
  getByProduct(
    @Param('name') name: string,
  ): Promise<GetAssemblyLineDto[] | null> {
    return this.service.getByProduct(name);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAssemblyLineDto,
  ): Promise<UpdateAssemblyLineDto> {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
