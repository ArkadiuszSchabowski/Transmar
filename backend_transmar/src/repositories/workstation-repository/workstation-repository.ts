import { Workstation } from "@prisma/client";
import { RepositoryContract } from "src/interfaces/repository-contract/repository-contract.interface";
import { PrismaService } from "src/prisma/prisma.service";

export class WorkstationRepository implements RepositoryContract<Workstation>{
      constructor(private readonly prisma: PrismaService) {}
    add(dto: { name: string; id: number; shortName: string; pcName: string; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<{ name: string; id: number; shortName: string; pcName: string; } | null> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<{ name: string; id: number; shortName: string; pcName: string; }[]> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: Partial<{ name: string; id: number; shortName: string; pcName: string; }>): Promise<{ name: string; id: number; shortName: string; pcName: string; }> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
