"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const expenseSchema = new mongoose_1.Schema({
    expenseId: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: [true, 'Description true']
    },
    amount: {
        type: Number,
        required: [true, 'Total ammount required']
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'UserId is required'],
        ref: "userModel"
    },
    bazarImage1: {
        type: String,
        required: [false, 'bazarImage1 is required'],
    },
    bazarImage2: {
        type: String,
        required: [false, 'bazarImage2 is required'],
    },
}, {
    timestamps: true,
});
const expenseModel = (0, mongoose_1.model)('expenseModel', expenseSchema);
exports.default = expenseModel;
