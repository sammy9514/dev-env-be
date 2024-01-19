import { Application, NextFunction, Request, Response } from "express";
import { mainError } from "./error/mainError";
import { HTTP } from "./utils/enum";
import { handleError } from "./error/handleError";
import student from "./router/studentRouter";

export const mainApp = (app: Application) => {
  try {
    app.use("/api/v1", student);
    app.get("/", (req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "success",
        });
        app.all("*", (req: Request, res: Response, next: NextFunction) => {
          next(
            new mainError({
              name: "error",
              message: " failed with error",
              status: HTTP.BAD,
              success: false,
            })
          );
        });
      } catch (error) {
        res.status(404).json({
          message: "failed to get",
        });
      }
    });
  } catch (error) {
    app.use(handleError);
  }
};
