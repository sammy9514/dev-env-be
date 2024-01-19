import { Document, Schema, model } from "mongoose";
import { iStudent } from "../utils/interface";

interface iData extends iStudent, Document {}

const studentModel = new Schema<iData>(
  {
    studentName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model<iData>("students", studentModel);
