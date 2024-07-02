"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    return {
        statusCode: 400,
        message: err.message,
        errorSources: [{
                path: err.path,
                message: err.message
            }]
    };
};
exports.default = handleCastError;
