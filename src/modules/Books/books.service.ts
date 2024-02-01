import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BookDTO } from 'src/dtos/book.dto';
import { AppError } from 'src/utils/AppError';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async createBook(data: BookDTO) {
    const checkBookExists = await this.prisma.book.findFirst({
      where: {
        title: data.title,
      },
    });

    if (checkBookExists) {
      throw new AppError('Esse livro não existe!');
    }

    const book = await this.prisma.book.create({
      data,
    });
    return book;
  }
}
