"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const expenseValidateSchema = zod_1.z.object({
    body: zod_1.z.object({
        description: zod_1.z.string({
            message: "Description is required",
            invalid_type_error: "Invalid type",
            required_error: "Description is required"
        }),
        amount: zod_1.z.number({
            required_error: "Amount is required",
            invalid_type_error: "Amount type is number"
        }),
        userId: zod_1.z.string({
            required_error: "UserId is required",
            invalid_type_error: "UserId type is mongose userId"
        }),
        bazarImage1: zod_1.z.string({
            invalid_type_error: "bazarImage1 type is url"
        }).optional(),
        bazarImage2: zod_1.z.string({
            invalid_type_error: "bazarImage2 type is url"
        }).optional()
    })
});
exports.default = expenseValidateSchema;
