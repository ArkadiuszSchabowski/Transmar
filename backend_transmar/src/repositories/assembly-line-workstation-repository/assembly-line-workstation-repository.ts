import { Injectable } from "@nestjs/common";
import { AssemblyLineWorkstationEntity } from "src/entities/assembly-line-workstation-entity";
import { Add } from "src/interfaces/add/add.interface";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AssemblyLineWorkstationRepository implements Add<AssemblyLineWorkstationEntity>{
      constructor(private readonly prisma: PrismaService) {}
      
    async add(dto: AssemblyLineWorkstationEntity): Promise<void> {
         await this.prisma.assemblyLineWorkstation.create({ data: dto });
    }

    async getNextOrder(assemblyLineId: number): Promise<number> {
    const count = await this.prisma.assemblyLineWorkstation.count({
        where: { assemblyLineId },
    });
    return count + 1;
}
}
