-- DropForeignKey
ALTER TABLE "AssemblyLineWorkstation" DROP CONSTRAINT "AssemblyLineWorkstation_assemblyLineId_fkey";

-- DropForeignKey
ALTER TABLE "AssemblyLineWorkstation" DROP CONSTRAINT "AssemblyLineWorkstation_workstationId_fkey";

-- AddForeignKey
ALTER TABLE "AssemblyLineWorkstation" ADD CONSTRAINT "AssemblyLineWorkstation_assemblyLineId_fkey" FOREIGN KEY ("assemblyLineId") REFERENCES "AssemblyLine"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyLineWorkstation" ADD CONSTRAINT "AssemblyLineWorkstation_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
