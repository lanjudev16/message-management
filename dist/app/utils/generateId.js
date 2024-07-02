"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateId = (totalUser) => {
    const userId = totalUser + 1;
    return userId.toString().padStart(4, '0');
};
exports.default = generateId;
