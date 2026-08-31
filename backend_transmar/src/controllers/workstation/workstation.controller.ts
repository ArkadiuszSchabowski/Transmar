import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AddWorkstationDto } from 'src/models/workstation/add-workstation-dto';
import { GetWorkstationDto } from 'src/models/workstation/get-workstation-dto';
import { UpdateWorkstationDto } from 'src/models/workstation/update-workstation-dto';
import { WorkstationService } from 'src/services/workstation/workstation.service';

@Controller('workstation')
export class WorkstationController {
      constructor(private readonly service: WorkstationService) {}
    
      @Post()
      add(@Body() dto: AddWorkstationDto): Promise<void> {
        return this.service.add(dto);
      }
    
      @Get()
      getAll(): Promise<GetWorkstationDto[]> {
        return this.service.getAll();
      }
    
      @Get(':id')
      getById(@Param('id', ParseIntPipe) id: number): Promise<GetWorkstationDto | null> {
        return this.service.getById(id);
      }
    
      @Put(':id')
      update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateWorkstationDto,
      ): Promise<UpdateWorkstationDto> {
        return this.service.update(id, dto);
      }
    
      @Delete(':id')
      remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.service.remove(id);
      }
}
