import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardGameSchema } from '../schemas/boardGame.schema.js';
import { BoardGameService } from './boardgame.service.js';
import { BoardGameController } from './boardgame.controller.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BoardGame', schema: BoardGameSchema }])],
  providers: [BoardGameService],
  controllers: [BoardGameController]
})
export class BoardGameModule {}
