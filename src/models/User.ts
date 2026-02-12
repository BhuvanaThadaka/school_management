import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "ADMIN" | "TEACHER" | "STUDENT";
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["ADMIN", "TEACHER", "STUDENT"],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
