import { Document, Schema } from "mongoose";
import { iStudent } from "../utils/interface";

interface iData extends iStudent, Document {}

const studentModel = new Schema<iData>(
  {
    name: {
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
