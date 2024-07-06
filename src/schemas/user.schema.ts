import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Document } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
export type TransactionDocument = HydratedDocument<Transaction>;
export type BonusAccountDocument = HydratedDocument<BonusAccount>;
export type GuestDocument = HydratedDocument<Guest>;
export type ReservationDocument = HydratedDocument<Reservation>;

@Schema()
export class Transaction {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true, enum: ['deposit', 'withdrawal'] })
  type: string;

  @Prop({ required: true })
  amount: number;
}

@Schema()
export class BonusAccount {
  @Prop({ required: true, default: 0 })
  balance: number;

  @Prop({ type: [Transaction], default: [] })
  transactions: Transaction[];
}

@Schema()
export class Guest {
  @Prop({ required: true })
  count: number;

  @Prop()
  name: string;

  @Prop()
  phone: string;
}

@Schema()
export class Visit {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true, enum: ['stopcheck', 'perMinute', 'rent'] })
  type: string;

  @Prop({ type: [Guest], default: [] })
  guests: Guest[];
}

@Schema()
export class Reservation {
  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  time: string;

  @Prop({ required: true, enum: ['stopcheck', 'perMinute', 'rent'] })
  type: string;
}

@Schema()
export class User extends Document {
  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  email: string;

  @Prop()
  birthDate: Date;

  @Prop()
  gender: string;

  @Prop({ type: BonusAccount, default: { balance: 0, transactions: [] } })
  bonusAccount: BonusAccount;

  @Prop()
  notes: string;

  @Prop({ default: false })
  isBanned: boolean;

  @Prop({ enum: ['Admin', 'Moderator'] })
  role: string;

  @Prop({ type: [Visit], default: [] })
  visitHistory: Visit[];

  @Prop({ type: [Reservation], default: [] })
  reservations: Reservation[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  referrals: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
