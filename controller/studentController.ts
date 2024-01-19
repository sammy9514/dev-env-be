import { Request, Response } from "express";
import studentModel from "../model/studentModel";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { studentName, email, password } = req.body;

    const user = await studentModel.create({
      studentName,
      email,
      password,
    });

    res.status(200).json({
      message: "success",
      data: user,
    });
  } catch (error) {
    console.log(error);

    res.status(404).json({
      message: "failed to create accountt",
    });
  }
};
