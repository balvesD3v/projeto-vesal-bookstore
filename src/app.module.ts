import { Module } from '@nestjs/common';
import { UserService } from './Users/users.service';
import { UserController } from './Users/user.controller';
import { PrismaService } from '../prisma/prismaService.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule {}
