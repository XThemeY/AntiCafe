import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { BoardGameService } from './boardgame.service.js';
import { BoardGame } from '../schemas/boardGame.schema.js';
import { CreateBoardGameDto, UpdateBoardGameDto } from '../dto/boardgame.dto.js';
import { BasicAuthGuard } from '../auth/auth.guard.js';

@Controller('board-games')
@UseGuards(BasicAuthGuard)
export class BoardGameController {
  constructor(private readonly boardGameService: BoardGameService) {}

  @Post()
  async create(@Body() createBoardGameDto: CreateBoardGameDto): Promise<BoardGame> {
    return this.boardGameService.create(createBoardGameDto);
  }

  @Get()
  async findAll(): Promise<BoardGame[]> {
    return this.boardGameService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BoardGame> {
    return this.boardGameService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBoardGameDto: UpdateBoardGameDto): Promise<BoardGame> {
    return this.boardGameService.update(id, updateBoardGameDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<BoardGame> {
    return this.boardGameService.delete(id);
  }
}
