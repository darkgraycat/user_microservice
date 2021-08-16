import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }

  @Get('isAdmin/:id')
  isAdmin(@Param('id') id: string): Promise<boolean> {
    return this.userService.isAdmin(id);
  }

  @Post()
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Patch(':id')
  addRole(@Param('id') id: string, @Body() body): Promise<UpdateResult> {
    return this.userService.addRole(id, body);
  }
}
