import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.module';
import { PrismaModule } from './modules/prisma.module';
import { ProductModule } from './modules/product.module';
import { AssemblyLineModule } from './modules/assembly-line.module';
import { WorkstationModule } from './modules/workstation.module';

@Module({
  imports: [UserModule, ProductModule, AssemblyLineModule, WorkstationModule, PrismaModule],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
