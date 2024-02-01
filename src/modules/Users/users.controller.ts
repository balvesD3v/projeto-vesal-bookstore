import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from 'src/dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() data: UserDTO) {
    return this.usersService.createUser(data);
  }

  @Get()
  async getUser() {
    return this.usersService.getUser();
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: UserDTO) {
    return this.usersService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
