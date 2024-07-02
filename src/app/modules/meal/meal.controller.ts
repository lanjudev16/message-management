import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { mealService } from "./meal.service";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const mealCreate=catchAsync(async(req:Request,res:Response)=>{
    const body=req.body
    const result=await mealService.mealCreate(body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Meal create successfully",
        data:result
    })
})
export const mealController={
    mealCreate
}