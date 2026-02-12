import mongoose, { Document, Schema } from "mongoose";

export interface ISubject extends Document {
  name: string;
  maxMarks: number;
}

const subjectSchema = new Schema<ISubject>(
  {
    name: { type: String, required: true, unique: true },
    maxMarks: { type: Number, default: 100 }
  },
  { timestamps: true }
);

export default mongoose.model<ISubject>("Subject", subjectSchema);
