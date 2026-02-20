import mongoose, { Document, Schema } from "mongoose";

export interface IEvent extends Document {
  title: string;
  description?: string;
  type: "EVENT" | "EXAM";
  date: Date;
  classId: mongoose.Types.ObjectId;
}

const eventSchema = new Schema<IEvent>(
  {
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String 
    },
    type: {
      type: String,
      enum: ["EVENT", "EXAM"],
      required: true
    },
    date: { 
      type: Date, 
      required: true 
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "Class",   // references Class model
      required: true
    }
  },
  { 
    timestamps: true 
  }
);

const Event =
  mongoose.models.Event ||
  mongoose.model<IEvent>("Event", eventSchema);

export default Event;
