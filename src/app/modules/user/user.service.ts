import httpStatus from "http-status";
import config from "../../config";
import AppError from "../../error/AppError";
import generateId from "../../utils/generateId";
import { TBorder } from "../border/border.interface";
import BorderModel from "../border/border.model";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";
import mongoose from "mongoose";

const createBorder = async (password: string, border: TBorder) => {
    const userData: Partial<TUser> = {}
    userData.password = password || config.default_password
    userData.role = "border"
    const totalBorder = (await userModel.find()).length
    userData.id = generateId(totalBorder).toString().padStart(4, '0')
    const session = await mongoose.startSession()
    try {
        (await session).startTransaction()
        const result = await userModel.create([userData], { session })
        if (!result.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new user")
        }

        border.id = result[0].id,
            border.user = result[0]._id
        const borderResult = await BorderModel.create([border], { session })
        if (!borderResult.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new user", "")
        }
        (await session).commitTransaction();
        (await session).endSession()
        return result;
    } catch (err) {
        (await session).abortTransaction()
        await session.endSession()
        throw new AppError(httpStatus.BAD_REQUEST, "Failed transection", "")
    }
}
export const userServices = {
    createBorder
}