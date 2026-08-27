-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssemblyLine" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "AssemblyLine_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workstation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "pcName" TEXT NOT NULL,

    CONSTRAINT "Workstation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AssemblyLineWorkstation" (
    "id" SERIAL NOT NULL,
    "assemblyLineId" INTEGER NOT NULL,
    "workstationId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "AssemblyLineWorkstation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AssemblyLine_productId_name_key" ON "AssemblyLine"("productId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Workstation_name_key" ON "Workstation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "AssemblyLineWorkstation_assemblyLineId_workstationId_key" ON "AssemblyLineWorkstation"("assemblyLineId", "workstationId");

-- AddForeignKey
ALTER TABLE "AssemblyLine" ADD CONSTRAINT "AssemblyLine_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyLineWorkstation" ADD CONSTRAINT "AssemblyLineWorkstation_assemblyLineId_fkey" FOREIGN KEY ("assemblyLineId") REFERENCES "AssemblyLine"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AssemblyLineWorkstation" ADD CONSTRAINT "AssemblyLineWorkstation_workstationId_fkey" FOREIGN KEY ("workstationId") REFERENCES "Workstation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
