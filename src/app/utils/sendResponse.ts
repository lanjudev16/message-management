import { Response } from "express"
import { TResponse } from "../types"
export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
    res.status(data.statusCode).json({
        success: true,
        message: data.message,
        data: data.data
    })
}