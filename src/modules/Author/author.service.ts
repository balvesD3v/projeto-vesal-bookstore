import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AuthorDTO } from 'src/dtos/author.dto';

@Injectable()
export class AuthorService {
  constructor(private readonly prisma: PrismaService) {}

  async createAuthor(data: AuthorDTO) {
    const checkAuthorExists = await this.prisma.author.findFirst({
      where: {
        name: data.name,
      },
    });
  }
}
