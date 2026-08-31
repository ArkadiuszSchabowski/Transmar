import { AssemblyLine } from "@prisma/client";
import { RepositoryContract } from "src/interfaces/repository-contract/repository-contract.interface";
import { PrismaService } from "src/prisma/prisma.service";

export class AssemblyLineRepository implements RepositoryContract<AssemblyLine>{
      constructor(private readonly prisma: PrismaService) {}
    add(dto: { name: string; id: number; active: boolean; productId: number; }): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getById(id: number): Promise<{ name: string; id: number; active: boolean; productId: number; } | null> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<{ name: string; id: number; active: boolean; productId: number; }[]> {
        throw new Error("Method not implemented.");
    }
    update(id: number, data: Partial<{ name: string; id: number; active: boolean; productId: number; }>): Promise<{ name: string; id: number; active: boolean; productId: number; }> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
