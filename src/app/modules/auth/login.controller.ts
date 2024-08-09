import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { loginService } from "./login.service"
import { sendResponse } from "../../utils/sendResponse"
import httpStatus from "http-status"
import { JwtPayload } from "jsonwebtoken"
import config from "../../config"

const login=catchAsync(async (req: Request, res: Response) => {
    const body=req.body
    const result = await loginService.login(body)
    res.cookie('refreshToken',result.refreshToken,{
        httpOnly:true,
        secure:false
    })
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Login successfully",
        data: result
    })

})
const changePassword=catchAsync(async (req: Request, res: Response) => {
    const body=req.body
    const result = await loginService.changePassword({body,user:req.user})
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Login successfully",
        data: result
    })
})
const refreshToken=catchAsync(async (req: Request, res: Response) => {
    const {refreshToken}=req.cookies
    const result = await loginService.refreshToken(refreshToken)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Refresh token successfully retrive",
        data: result
    })
})
export const loginController={
    login,
    changePassword,
    refreshToken
}