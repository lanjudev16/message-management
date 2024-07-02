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
exports.userServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../error/AppError"));
const generateId_1 = __importDefault(require("../../utils/generateId"));
const border_model_1 = __importDefault(require("../border/border.model"));
const user_model_1 = require("./user.model");
const mongoose_1 = __importDefault(require("mongoose"));
const createBorder = (password, border) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = {};
    userData.password = password || config_1.default.default_password;
    userData.role = "border";
    const totalBorder = (yield user_model_1.userModel.find()).length;
    userData.id = (0, generateId_1.default)(totalBorder).toString().padStart(4, '0');
    const session = yield mongoose_1.default.startSession();
    try {
        (yield session).startTransaction();
        const result = yield user_model_1.userModel.create([userData], { session });
        if (!result.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create new user");
        }
        border.id = result[0].id,
            border.user = result[0]._id;
        const borderResult = yield border_model_1.default.create([border], { session });
        if (!borderResult.length) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed to create new user", "");
        }
        (yield session).commitTransaction();
        (yield session).endSession();
        return result;
    }
    catch (err) {
        (yield session).abortTransaction();
        yield session.endSession();
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Failed transection", "");
    }
});
exports.userServices = {
    createBorder
};
