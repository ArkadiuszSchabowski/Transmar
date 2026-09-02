import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssemblyLineController } from './controllers/assembly-line/assembly-line.controller';
import { WorkstationController } from './controllers/workstation/workstation.controller';
import { WorkstationService } from './services/workstation/workstation.service';
import { AssemblyLineService } from './services/assembly-line/assembly-line.service';
import { UserModule } from './modules/user.module';
import { PrismaModule } from './modules/prisma.module';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [UserModule, ProductModule, PrismaModule],
  controllers: [AppController, AssemblyLineController, WorkstationController],
  providers: [
    AppService,
    WorkstationService,
    AssemblyLineService,
  ],
})
export class AppModule {}
