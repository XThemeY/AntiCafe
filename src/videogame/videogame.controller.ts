import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VideoGameService } from './videogame.service.js';
import { VideoGame } from '../schemas/videoGame.schema.js';
import { CreateVideoGameDto, UpdateVideoGameDto } from '../dto/videogame.dto.js';

@Controller('video-games')
export class VideoGameController {
  constructor(private readonly videoGameService: VideoGameService) {}

  @Post()
  async create(@Body() createVideoGameDto: CreateVideoGameDto): Promise<VideoGame> {
    return this.videoGameService.create(createVideoGameDto);
  }

  @Get()
  async findAll(): Promise<VideoGame[]> {
    return this.videoGameService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VideoGame> {
    return this.videoGameService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVideoGameDto: UpdateVideoGameDto): Promise<VideoGame> {
    return this.videoGameService.update(id, updateVideoGameDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<VideoGame> {
    return this.videoGameService.delete(id);
  }
}
