import { HTTP } from "./enum";

export interface iError {
  name: string;
  message: string;
  status: HTTP;
  success: boolean;
}

export interface iStudent {
  studentName: string;
  email: string;
  password: string;
}
