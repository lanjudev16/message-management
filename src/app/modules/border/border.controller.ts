import { Request, Response } from "express"
import { BorderService } from "./border.service"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from 'http-status'
import catchAsync from "../../utils/catchAsync"


const getAllBorder = catchAsync(async (req: Request, res: Response) => {
    const query=req.query
    const result = await BorderService.getAllBorder(query)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Borders data get successfully",
        data: result
    })

})
const getSingleBorder = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id
    const result = await BorderService.getSingleBorder(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Border data get successfully",
        data: result
    })
})
export const BorderController = {
    getAllBorder,
    getSingleBorder
}