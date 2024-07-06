import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VideoGame } from '../schemas/videoGame.schema.js';
import { CreateVideoGameDto, UpdateVideoGameDto } from '../dto/videogame.dto.js';

@Injectable()
export class VideoGameService {
  constructor(@InjectModel('VideoGame') private readonly videoGameModel: Model<VideoGame>) {}

  async create(createVideoGameDto: CreateVideoGameDto): Promise<VideoGame> {
    const createdVideoGame = new this.videoGameModel(createVideoGameDto);
    return createdVideoGame.save();
  }

  async findAll(): Promise<VideoGame[]> {
    return this.videoGameModel.find().exec();
  }

  async findOne(id: string): Promise<VideoGame> {
    return this.videoGameModel.findById(id).exec();
  }

  async update(id: string, updateVideoGameDto: UpdateVideoGameDto): Promise<VideoGame> {
    return this.videoGameModel.findByIdAndUpdate(id, updateVideoGameDto, { new: true }).exec();
  }

  async delete(id: string): Promise<VideoGame> {
    return this.videoGameModel.findByIdAndDelete(id).exec();
  }
}
