"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
    },
    needPasswordChanged: {
        type: Boolean,
        default: true
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'border', 'manager'],
            message: `{VALUE} is not supported`
        },
        default: 'border'
    },
    status: {
        type: String,
        enum: {
            values: ['in-progress', 'blocked'],
            message: `{VALUE} is not supported`
        },
        default: 'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
exports.userModel = (0, mongoose_1.model)('userModel', userSchema);
