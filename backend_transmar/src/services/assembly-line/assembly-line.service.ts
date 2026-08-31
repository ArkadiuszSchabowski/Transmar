import { Injectable } from '@nestjs/common';
import { ServiceContract } from 'src/interfaces/service-contract/service-contract.interface';
import { AddAssemblyLineDto } from 'src/models/assembly-line/add-assembly-line-dto';
import { GetAssemblyLineDto } from 'src/models/assembly-line/get-assembly-line-dto';
import { UpdateAssemblyLineDto } from 'src/models/assembly-line/update-assembly-line-dto';

@Injectable()
export class AssemblyLineService implements ServiceContract<AddAssemblyLineDto, GetAssemblyLineDto, UpdateAssemblyLineDto> {
    add(dto: AddAssemblyLineDto): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getById(id: number): Promise<GetAssemblyLineDto | null> {
        throw new Error('Method not implemented.');
    }
    getAll(): Promise<GetAssemblyLineDto[]> {
        throw new Error('Method not implemented.');
    }
    update(id: number, data: Partial<UpdateAssemblyLineDto>): Promise<UpdateAssemblyLineDto> {
        throw new Error('Method not implemented.');
    }
    remove(id: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
