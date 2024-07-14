import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class VideoGame extends Document {
  @Prop({ type: String })
  title: string;

  @Prop({ type: Number })
  releaseYear: number;

  @Prop({ type: String })
  players: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: String })
  poster: string;

  @Prop({ type: [String] })
  category: string[];

  @Prop({ type: [String] })
  genre: string[];
}

export const VideoGameSchema = SchemaFactory.createForClass(VideoGame);
