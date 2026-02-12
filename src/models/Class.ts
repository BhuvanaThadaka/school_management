import mongoose, { Document, Schema } from "mongoose";

export interface IClass extends Document {
  name: string;        // 10
  section: string;     // A
  academicYear: string;
}

const classSchema = new Schema<IClass>(
  {
    name: { type: String, required: true },
    section: { type: String, required: true },
    academicYear: { type: String, required: true }
  },
  { timestamps: true }
);

classSchema.index({ name: 1, section: 1, academicYear: 1 }, { unique: true });

export default mongoose.model<IClass>("Class", classSchema);
