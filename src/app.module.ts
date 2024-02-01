import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prismaService.service';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
