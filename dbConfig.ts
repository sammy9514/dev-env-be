import { connect } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL: any = process.env.DATABASE_STRING;

export const mainConnection = () => {
  try {
    return connect(URL).then(() => {
      console.log("db connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
};
