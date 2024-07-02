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
exports.BorderService = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const constants_1 = require("../../constants/constants");
const border_model_1 = __importDefault(require("./border.model"));
const getAllBorder = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const borderBuilder = new QueryBuilder_1.default(border_model_1.default.find(), query).search(constants_1.searchableFields);
    const result = yield borderBuilder.modelQuery;
    return result;
});
const getSingleBorder = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield border_model_1.default.findById(id);
    return result;
});
exports.BorderService = {
    getAllBorder,
    getSingleBorder
};
