import { IsNotEmpty, IsString, IsNumber, Min, Max, IsUrl, IsOptional, IsArray } from 'class-validator';

export class CreateVideoGameDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1950)
  @Max(new Date().getFullYear())
  readonly releaseYear: number;

  @IsNotEmpty()
  @IsString()
  readonly players: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsUrl()
  readonly poster: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  readonly genre: string[];
}

export class UpdateVideoGameDto {
  @IsOptional()
  @IsString()
  readonly titleEn?: string;

  @IsOptional()
  @IsString()
  readonly titleRu?: string;

  @IsOptional()
  @IsNumber()
  @Min(1950)
  @Max(new Date().getFullYear())
  readonly releaseYear?: number;

  @IsOptional()
  @IsString()
  readonly players?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsOptional()
  @IsUrl()
  readonly poster?: string;

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  readonly genre: string[];
}
