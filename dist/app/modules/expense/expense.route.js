"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expense_controller_1 = require("./expense.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const expense_validate_1 = __importDefault(require("./expense.validate"));
const router = (0, express_1.Router)();
router.post('/create-expense', (0, validateRequest_1.default)(expense_validate_1.default), expense_controller_1.expenseController.createExpense);
const expenseRouter = router;
exports.default = expenseRouter;
