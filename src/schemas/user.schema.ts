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
  @Prop({ type: Number, required: true, default: 0 })
  balance: number;

  @Prop({ type: [Transaction], default: [] })
  transactions: Transaction[];
}

@Schema()
export class Guest {
  @Prop({ required: true })
  count: number;

  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  phone: string;
}

@Schema()
export class Visit {
  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: String, required: true })
  time: string;

  @Prop({ type: String, required: true, enum: ['stopcheck', 'perMinute', 'rent'] })
  type: string;

  @Prop({ type: [Guest], default: [] })
  guests: Guest[];
}

@Schema()
export class Reservation {
  @Prop({ type: String, required: true })
  date: string;

  @Prop({ type: String, required: true })
  time: string;

  @Prop({ type: String, required: true, enum: ['stopcheck', 'perMinute', 'rent'] })
  type: string;
}

@Schema()
export class User extends Document {
  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: String })
  birthDate: Date;

  @Prop({ type: String })
  gender: string;

  @Prop({ type: BonusAccount, default: { balance: 0, transactions: [] } })
  bonusAccount: BonusAccount;

  @Prop({ type: String })
  notes: string;

  @Prop({ type: Boolean, default: false })
  isBanned: boolean;

  @Prop({ type: String, enum: ['Admin', 'Moderator'] })
  role: string;

  @Prop({ type: [Visit], default: [] })
  visitHistory: Visit[];

  @Prop({ type: [Reservation], default: [] })
  reservations: Reservation[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }] })
  referrals: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
