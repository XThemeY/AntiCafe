import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BoardGame extends Document {
  @Prop({ type: String })
  titleEn: string;

  @Prop({ type: String })
  titleRu: string;

  @Prop({ type: Number })
  releaseYear: number;

  @Prop({ type: String })
  players: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: [String] })
  category: string[];

  @Prop({ type: [String] })
  mechanics: string[];

  @Prop({ type: String })
  difficulty: string;

  @Prop({ type: String })
  poster: string;

  @Prop({ type: Number })
  rating: number;

  @Prop({ type: String })
  playingTime: string;

  @Prop({ type: String })
  placeToStore: string;

  @Prop({ type: [String] })
  video: string[];
}

export const BoardGameSchema = SchemaFactory.createForClass(BoardGame);
