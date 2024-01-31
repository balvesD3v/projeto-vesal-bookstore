import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma/prismaService.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(user: User): Promise<User> {
    const createdUser = await this.prisma.user.create({
      data: user,
    });
    return createdUser;
  }

  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }
}
