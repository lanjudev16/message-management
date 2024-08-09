import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { savingService } from "./saving.service"
import { Request, Response } from "express"

const createSaving = catchAsync(async (req: Request, res: Response) => {
    const body = req.body
    const result = await savingService.savingCreate(body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Admin create successfully",
        data: result
    })
})
const updateSaving = catchAsync(async (req: Request, res: Response) => {
    const body = req.body
    const result = await savingService.updateSaving(body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "update ammount successfully",
        data: result
    })
})
export const savingController={
    createSaving,
    updateSaving
}