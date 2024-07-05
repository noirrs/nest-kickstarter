import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  mail: string;

  @Prop({ required: true, minlength: 4 })
  password: string;

  @Prop({ default: false })
  admin: boolean;

  @Prop({ default: null })
  photo: string | null;

  @Prop({ required: true, unique: true })
  uid: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
