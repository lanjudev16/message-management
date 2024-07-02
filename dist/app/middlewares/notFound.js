"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
const http_status_1 = __importDefault(require("http-status"));
const notFound = (rsq, res) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Api not found",
        error: ""
    });
};
exports.notFound = notFound;
