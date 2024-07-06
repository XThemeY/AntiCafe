import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BoardGame } from '../schemas/boardGame.schema.js';
import { CreateBoardGameDto, UpdateBoardGameDto } from '../dto/boardgame.dto.js';

@Injectable()
export class BoardGameService {
  constructor(@InjectModel('BoardGame') private readonly boardGameModel: Model<BoardGame>) {}

  async create(createBoardGameDto: CreateBoardGameDto): Promise<BoardGame> {
    const createdBoardGame = new this.boardGameModel(createBoardGameDto);
    return createdBoardGame.save();
  }

  async findAll(): Promise<BoardGame[]> {
    return this.boardGameModel.find().exec();
  }

  async findOne(id: string): Promise<BoardGame> {
    return this.boardGameModel.findById(id).exec();
  }

  async update(id: string, updateBoardGameDto: UpdateBoardGameDto): Promise<BoardGame> {
    return this.boardGameModel.findByIdAndUpdate(id, updateBoardGameDto, { new: true }).exec();
  }

  async delete(id: string): Promise<BoardGame> {
    return this.boardGameModel.findByIdAndDelete(id).exec();
  }
}
