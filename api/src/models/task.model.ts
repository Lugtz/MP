import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  dueDate: Date;
  status: "pending" | "completed";
  userId: mongoose.Types.ObjectId;
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

export default mongoose.model<ITask>("Task", taskSchema);
