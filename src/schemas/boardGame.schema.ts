import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BoardGame extends Document {
  @Prop({ required: true })
  titleEn: string;

  @Prop({ required: true })
  titleRu: string;

  @Prop({ required: true })
  releaseYear: number;

  @Prop({ required: true })
  players: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  difficulty: string;

  @Prop({ required: true })
  poster: string;

  @Prop()
  category: string;

  @Prop()
  playingTime: string;
}

export const BoardGameSchema = SchemaFactory.createForClass(BoardGame);
