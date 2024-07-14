import { IsNotEmpty, IsString, IsNumber, Min, Max, IsUrl, IsOptional, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateBoardGameDto {
  @IsNotEmpty()
  @IsString()
  readonly titleEn: string;

  @IsNotEmpty()
  @IsString()
  readonly titleRu: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  readonly releaseYear: number;

  @IsNotEmpty()
  @IsString()
  readonly players: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsString()
  readonly difficulty: string;

  @IsNotEmpty()
  @IsUrl()
  readonly poster: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  readonly category: string[];

  @IsOptional()
  @IsString()
  readonly playingTime: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  readonly mechanics: string[];

  @IsOptional()
  @IsNumber()
  readonly rating: number;

  @IsOptional()
  @IsString()
  readonly placeToStore: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  readonly video: string[];
}

export class UpdateBoardGameDto {
  @IsOptional()
  @IsString()
  readonly titleEn?: string;

  @IsOptional()
  @IsString()
  readonly titleRu?: string;

  @IsOptional()
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear())
  readonly releaseYear?: number;

  @IsOptional()
  @IsString()
  readonly players?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsString()
  readonly difficulty?: string;

  @IsOptional()
  @IsUrl()
  readonly poster?: string;

  @IsOptional()
  @IsString()
  readonly category?: string;

  @IsOptional()
  @IsString()
  readonly playingTime?: string;
}
