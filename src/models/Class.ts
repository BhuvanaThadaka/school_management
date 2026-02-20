import mongoose, { Document, Schema } from "mongoose";

export interface IClass extends Document {
  name: string;
  section: string;
  academicYear: string;
}

const classSchema = new Schema<IClass>(
  {
    name: { 
      type: String, 
      required: true 
    },
    section: { 
      type: String, 
      required: true 
    },
    academicYear: { 
      type: String, 
      required: true 
    }
  },
  { 
    timestamps: true 
  }
);

// Unique constraint (10-A-2024 should not duplicate)
classSchema.index(
  { name: 1, section: 1, academicYear: 1 },
  { unique: true }
);

// Virtual relationship (One Class → Many Events)
classSchema.virtual("events", {
  ref: "Event",
  localField: "_id",
  foreignField: "classId"
});

// Allow virtual fields in JSON
classSchema.set("toObject", { virtuals: true });
classSchema.set("toJSON", { virtuals: true });

const Class =
  mongoose.models.Class ||
  mongoose.model<IClass>("Class", classSchema);

export default Class;
