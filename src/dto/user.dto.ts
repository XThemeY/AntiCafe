import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsOptional,
  IsDate,
  IsEnum,
  IsBoolean,
  IsNumber,
  ValidateNested,
  IsArray,
  Min
} from 'class-validator';
import { Type } from 'class-transformer';

class TransactionDto {
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsEnum(['deposit', 'withdrawal'])
  type: string;

  @IsNumber()
  @Min(0)
  amount: number;
}

class BonusAccountDto {
  @IsNumber()
  @Min(0)
  balance: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}

class GuestDto {
  @IsNumber()
  @Min(1)
  count: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  phone?: string;
}

class VisitDto {
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsString()
  time: string;

  @IsEnum(['stopcheck', 'perMinute', 'rent'])
  type: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => GuestDto)
  guests: GuestDto[];
}

class ReservationDto {
  @IsDate()
  @Type(() => Date)
  date: Date;

  @IsString()
  time: string;

  @IsEnum(['stopcheck', 'perMinute', 'rent'])
  type: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  birthDate?: Date;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => BonusAccountDto)
  bonusAccount?: BonusAccountDto;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsBoolean()
  isBanned?: boolean;

  @IsOptional()
  @IsEnum(['Admin', 'Moderator'])
  role?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VisitDto)
  visitHistory?: VisitDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ReservationDto)
  reservations?: ReservationDto[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  referrals?: string[]; // Здесь мы используем строки для ID, так как при создании пользователя мы не можем передавать объекты User
}
