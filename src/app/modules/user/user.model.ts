import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: false,
        select:0
    },
    needPasswordChanged: {
        type: Boolean,
        default: true
    },
    passwordChangeAt:{
        type:Date,
        default:new Date()
    },
    role: {
        type: String,
        enum: {
            values: ['admin', 'border', 'manager'],
            message: `{VALUE} is not supported`
        },
        default:'border'
    },
    status: {
        type: String,
        enum: {
            values: ['in-progress', 'blocked'],
            message: `{VALUE} is not supported`
        },
        default:'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}
    ,
    {
        timestamps: true
    }
)

export const userModel = model<TUser>('userModel', userSchema)