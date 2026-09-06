import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user/user.controller';
import { UserRepository } from 'src/repositories/user-repository/user-repository';
import { UserService } from 'src/services/user/user.service';
import { UserValidator } from 'src/validators/user-validator';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserRepository, UserValidator],
})
export class UserModule {}
