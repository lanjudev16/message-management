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
const createAdmin = catchAsync(async (req: Request, res: Response) => {
    const { password, admin } = req.body
    const result = await userServices.createAdmin(password, admin)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin create successfully",
        data: result
    })
})
const updateBorderToManagerRole = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await userServices.updateBorderToManagerRole(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User role update successfully",
        data: result
    })
})
export const userController = {
    createBorder,
    createAdmin,
    updateBorderToManagerRole
}