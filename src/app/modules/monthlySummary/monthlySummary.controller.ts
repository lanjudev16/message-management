import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { monthlySummaryService } from "./monthlySummary.service"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status"

const monthlySummaryCreate=catchAsync(async(req:Request,res:Response)=>{
    const body=req.body
    const {currentDate,startDate}=body
    const date={
        currentDate,startDate
    }
    const result=await monthlySummaryService.monthlySummaryCreate(body,date)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Monthly summary create successfully",
        data:result
    })
})
const monthlySummaryGetSingleUser=catchAsync(async(req:Request,res:Response)=>{
    const id=req.params.id
    const body=req.body
    const result=await monthlySummaryService.monthlySummaryGetSingleUser(id,body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Monthly summary a single user successfully",
        data:result
    })
})
const getMonthlySummaryData=catchAsync(async(req:Request,res:Response)=>{
    const id=req.params.id
    const result=await monthlySummaryService.getMonthlySummaryData()
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Monthly summary data get successfully",
        data:result
    })
})
export const monthlySummaryController={
    monthlySummaryCreate,
    monthlySummaryGetSingleUser,
    getMonthlySummaryData
}