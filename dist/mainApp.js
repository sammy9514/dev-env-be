"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainError_1 = require("./error/mainError");
const enum_1 = require("./utils/enum");
const handleError_1 = require("./error/handleError");
const studentRouter_1 = __importDefault(require("./router/studentRouter"));
const mainApp = (app) => {
    try {
        app.use("/api/v1", studentRouter_1.default);
        app.get("/", (req, res) => {
            try {
                res.status(200).json({
                    message: "success",
                });
                app.all("*", (req, res, next) => {
                    next(new mainError_1.mainError({
                        name: "error",
                        message: " failed with error",
                        status: enum_1.HTTP.BAD,
                        success: false,
                    }));
                });
            }
            catch (error) {
                res.status(404).json({
                    message: "failed to get",
                });
            }
        });
    }
    catch (error) {
        app.use(handleError_1.handleError);
    }
};
exports.mainApp = mainApp;
