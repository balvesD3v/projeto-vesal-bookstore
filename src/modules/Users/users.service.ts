import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { UserDTO } from '../../dtos/user.dto';
import { AppError } from 'src/utils/AppError';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: UserDTO) {
    const checkEmailExists = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });

    if (checkEmailExists) {
      throw new AppError('Esse email já existe!!');
    }

    const user = await this.prisma.user.create({
      data,
    });
    return user;
  }

  async updateUser(id: string, data: UserDTO) {
    const usersExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!usersExists) {
      throw new AppError('Esse usuário não existe!');
    }

    return await this.prisma.user.update({
      data,
      where: { id },
    });
  }

  async getUser() {
    return this.prisma.user.findMany();
  }

  async deleteUser(id: string) {
    const usersExists = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });

    if (!usersExists) {
      throw new AppError('Esse usuário não existe!');
    }

    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
