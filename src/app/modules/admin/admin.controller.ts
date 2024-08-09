import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"
import { sendResponse } from "../../utils/sendResponse"
import { adminService } from "./admin.service"
import { Request, Response } from "express"

const adminRetrive=catchAsync(async(req:Request,res:Response)=>{
    const result=await adminService.adminRetrive()
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Admin retrive successfully retrive",
        data:result
    })
})
const SingleAdminRetrive=catchAsync(async(req:Request,res:Response)=>{
    const id=req.params.id
    const result=await adminService.singleAdminRetrive(id)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Single admin retrive successfully",
        data:result
    })
})
export const adminController={
    adminRetrive,
    SingleAdminRetrive
}