import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WorkstationController } from './controllers/workstation/workstation.controller';
import { WorkstationService } from './services/workstation/workstation.service';
import { UserModule } from './modules/user.module';
import { PrismaModule } from './modules/prisma.module';
import { ProductModule } from './modules/product.module';
import { AssemblyLineModule } from './modules/assembly-line.module';

@Module({
  imports: [UserModule, ProductModule, AssemblyLineModule, PrismaModule],
  controllers: [AppController, WorkstationController],
  providers: [
    AppService,
    WorkstationService,
  ],
})
export class AppModule {}
