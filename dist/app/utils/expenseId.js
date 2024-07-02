"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateExpenseId = (id) => {
    const expenseId = (Number(id) + 1).toString().padStart(6, '0');
    return expenseId;
};
exports.default = generateExpenseId;
