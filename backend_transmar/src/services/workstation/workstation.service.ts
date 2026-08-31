import { Injectable } from '@nestjs/common';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddWorkstationDto } from 'src/models/workstation/add-workstation-dto';
import { GetWorkstationDto } from 'src/models/workstation/get-workstation-dto';
import { UpdateWorkstationDto } from 'src/models/workstation/update-workstation-dto';

@Injectable()
export class WorkstationService implements ServiceContract<AddWorkstationDto, GetWorkstationDto, UpdateWorkstationDto>{
    add(dto: AddWorkstationDto): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getById(id: number): Promise<GetWorkstationDto | null> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<GetWorkstationDto[]> {
        throw new Error('Method not implemented.');
    }
    update(id: number, data: Partial<UpdateWorkstationDto>): Promise<UpdateWorkstationDto> {
        throw new Error('Method not implemented.');
    }
    remove(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
