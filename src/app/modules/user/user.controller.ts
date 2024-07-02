import { Request, Response } from "express";
import { userServices } from "./user.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createBorder = catchAsync(async (req: Request, res: Response) => {
    const { password, border } = req.body
    const result = await userServices.createBorder(password, border)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User create successfully",
        data: result
    })
})
export const userController = {
    createBorder
}