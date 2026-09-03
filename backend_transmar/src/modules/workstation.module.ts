import { Module } from "@nestjs/common";
import { WorkstationController } from "src/controllers/workstation/workstation.controller";
import { WorkstationRepository } from "src/repositories/workstation-repository/workstation-repository";
import { WorkstationService } from "src/services/workstation/workstation.service";
import { WorkstationValidator } from "src/validators/workstation-validator";

@Module({
  controllers: [WorkstationController],
  providers: [WorkstationService, WorkstationRepository, WorkstationValidator]
})
export class WorkstationModule {}