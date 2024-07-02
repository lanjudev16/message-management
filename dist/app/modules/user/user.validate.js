"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = require("zod");
const userValidateSchema = zod_1.z.object({
    password: zod_1.z.string({ invalid_type_error: "password is not this type give me string type", required_error: "password is required" }).max(20).optional(),
});
exports.userValidation = {
    userValidateSchema
};
