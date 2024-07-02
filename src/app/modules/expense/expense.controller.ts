import { Request, Response } from "express"
import { expenseService } from "./expense.service"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"


const createExpense = catchAsync(async (req: Request, res: Response) => {
    const data = req.body
    const result = await expenseService.createExpense(data)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Create expense succesfully",
        data: result
    })
})
export const expenseController = {
    createExpense
}