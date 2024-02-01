import { Body, Controller, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDTO } from 'src/dtos/book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async createBook(@Body() data: BookDTO) {
    return this.booksService.createBook(data);
  }
}
