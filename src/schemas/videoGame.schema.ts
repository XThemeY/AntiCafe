import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class VideoGame extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  releaseYear: number;

  @Prop({ required: true })
  players: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  poster: string;

  @Prop()
  genre: string;
}

export const VideoGameSchema = SchemaFactory.createForClass(VideoGame);
