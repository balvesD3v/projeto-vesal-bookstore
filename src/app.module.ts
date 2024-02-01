import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { UsersModule } from './modules/Users/users.module';
import { BooksModule } from './modules/Books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
