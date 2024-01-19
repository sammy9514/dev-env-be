"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = void 0;
const studentModel_1 = __importDefault(require("../model/studentModel"));
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentName, email, password } = req.body;
        const user = yield studentModel_1.default.create({
            studentName,
            email,
            password,
        });
        res.status(200).json({
            message: "success",
            data: user,
        });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({
            message: "failed to create accountt",
        });
    }
});
exports.createStudent = createStudent;
