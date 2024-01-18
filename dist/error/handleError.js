"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const buildErrorMessage = (err, res) => {
    try {
        return res.status(404).json({
            name: err.name,
            message: err.message,
            status: err.status,
            success: err.success,
            stack: err.stack,
            error: err,
        });
    }
    catch (error) {
        console.log(error);
    }
};
const handleError = (req, res, err, next) => {
    return buildErrorMessage(err, res);
};
exports.handleError = handleError;
