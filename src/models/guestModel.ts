import mongoose, { Schema, Document } from 'mongoose';

interface IGuest extends Document {
  name: string;
  tickets: number;
  telephone: string;
  attendance: boolean;
  confirmation_date: Date | null;
}

const GuestSchema: Schema = new Schema({
  name: { type: String, required: true },
  tickets: { type: Number, required: true },
  telephone: { type: String, required: true },
  attendance: { type: Boolean, default: false },
  confirmation_date: { type: Date, default: null }
});

export default mongoose.model<IGuest>('Guest', GuestSchema);
