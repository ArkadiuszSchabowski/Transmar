import { Body, Controller, Delete, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AddAssemblyLineWorkstationDto } from 'src/models/assembly-line-workstation/add-assembly-line-workstation-dto';
import { AssemblyLineWorkstationService } from 'src/services/assembly-line-workstation/assembly-line-workstation.service';

@Controller('assembly-line-workstation')
export class AssemblyLineWorkstationController {
  constructor(private readonly service: AssemblyLineWorkstationService) {}

  @Post()
  add(@Body() dto: AddAssemblyLineWorkstationDto): Promise<void> {
    return this.service.add(dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }
}
