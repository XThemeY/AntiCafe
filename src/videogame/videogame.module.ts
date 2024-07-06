import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VideoGameSchema } from '../schemas/videoGame.schema.js';
import { VideoGameService } from './videogame.service.js';
import { VideoGameController } from './videogame.controller.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'VideoGame', schema: VideoGameSchema }])],
  providers: [VideoGameService],
  controllers: [VideoGameController]
})
export class VideoGameModule {}
