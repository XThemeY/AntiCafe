import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service.js';
import { User } from '../schemas/user.schema.js';
import { CreateUserDto } from '../dto/user.dto.js';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Добавьте другие методы по необходимости
}
