import { AssemblyLine } from "@prisma/client";

export interface GetByProductRepository  {
      getByProduct(name: string): Promise<AssemblyLine[]>;
}
