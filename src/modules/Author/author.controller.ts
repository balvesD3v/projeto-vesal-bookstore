import { Controller } from '@nestjs/common';
import { AuthorService } from './author.service';
import { BookDTO } from 'src/dtos/book.dto';

@Controller('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}
}
