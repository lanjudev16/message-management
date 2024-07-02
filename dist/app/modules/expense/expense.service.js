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
exports.expenseService = void 0;
const expenseId_1 = __importDefault(require("../../utils/expenseId"));
const expense_model_1 = __importDefault(require("./expense.model"));
const createExpense = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const totalBazar = (yield expense_model_1.default.find()).length;
    const expenseId = (0, expenseId_1.default)(Number(totalBazar));
    if (payLoad) {
        payLoad.expenseId = expenseId;
    }
    const result = yield expense_model_1.default.create(payLoad);
    return result;
});
exports.expenseService = {
    createExpense
};
