"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const config_1 = __importDefault(require("../config"));
const zod_1 = require("zod");
const ZodValidationError_1 = __importDefault(require("../error/ZodValidationError"));
const handleMongooseError_1 = __importDefault(require("../error/handleMongooseError"));
const handleCastError_1 = __importDefault(require("../error/handleCastError"));
const handleDuplicateError_1 = __importDefault(require("../error/handleDuplicateError"));
const AppError_1 = __importDefault(require("../error/AppError"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong";
    let errorSources = [{
            path: '',
            message: 'Something went wrong'
        }];
    if (err instanceof zod_1.ZodError) {
        const simplifyError = (0, ZodValidationError_1.default)(err);
        statusCode = simplifyError.statusCode,
            message = simplifyError.message,
            errorSources = simplifyError.errorSources;
    }
    else if (err.name == "ValidationError") {
        const simplifyError = (0, handleMongooseError_1.default)(err);
        statusCode = simplifyError.statusCode,
            message = simplifyError.message,
            errorSources = simplifyError.errorSources;
    }
    else if (err.name == "CastError") {
        const simplifyError = (0, handleCastError_1.default)(err);
        statusCode = simplifyError.statusCode,
            message = simplifyError.message,
            errorSources = simplifyError.errorSources;
    }
    else if ((err === null || err === void 0 ? void 0 : err.name) == "CastError") {
        const simplifyError = (0, handleDuplicateError_1.default)(err);
        statusCode = simplifyError.statusCode,
            message = simplifyError.message,
            errorSources = simplifyError.errorSources;
    }
    else if (err instanceof AppError_1.default) {
        statusCode = err.statusCode,
            message = err.message,
            errorSources = [{
                    path: "",
                    message: err.message
                }];
    }
    else if (err instanceof Error) {
        message = err.message,
            errorSources = [{
                    path: "",
                    message: err.message
                }];
    }
    return res.status(statusCode).json({
        success: false,
        message: message,
        errorSources,
        stack: config_1.default.NODE_ENV == "development" ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.globalErrorHandler = globalErrorHandler;
