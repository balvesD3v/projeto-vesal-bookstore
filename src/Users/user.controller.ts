import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from '../Users/users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() user: any): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}
