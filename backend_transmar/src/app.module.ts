import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './controllers/product/product.controller';
import { AssemblyLineController } from './controllers/assembly-line/assembly-line.controller';
import { WorkstationController } from './controllers/workstation/workstation.controller';
import { WorkstationService } from './services/workstation/workstation.service';
import { ProductService } from './services/product/product.service';
import { AssemblyLineService } from './services/assembly-line/assembly-line.service';
import { UserModule } from './modules/user.module';
import { PrismaModule } from './modules/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [AppController, ProductController, AssemblyLineController, WorkstationController],
  providers: [AppService, WorkstationService, ProductService, AssemblyLineService],
})
export class AppModule {}
