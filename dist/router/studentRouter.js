"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controller/studentController");
const router = (0, express_1.Router)();
router.route("/create-student").post(studentController_1.createStudent);
exports.default = router;
