"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleMongooseError = (err) => {
    const errorSources = Object.values(err.errors).map((item) => {
        return {
            path: item.path,
            message: item.message
        };
    });
    return {
        statusCode: 400,
        message: err.message,
        errorSources
    };
};
exports.default = handleMongooseError;
