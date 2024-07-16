import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { monthlySummaryService } from "./monthlySummary.service"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status"

const monthlySummaryCreate=catchAsync(async(req:Request,res:Response)=>{
    const body=req.body
    const result=await monthlySummaryService.monthlySummaryCreate(body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Monthly summary create successfully",
        data:result
    })
})
export const monthlySummaryController={
    monthlySummaryCreate
}