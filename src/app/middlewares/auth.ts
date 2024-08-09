import { NextFunction, Request, Response } from "express"
import catchAsync from "../utils/catchAsync"
import AppError from "../error/AppError"
import httpStatus from "http-status"
import jwt, { JwtPayload } from "jsonwebtoken"
import config from "../config"
import { TUserRoll } from "../modules/user/user.interface"
import { userModel } from "../modules/user/user.model"

const auth=(...RequiredRole:TUserRoll[])=>{
    return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const token=req.headers.authorization
        if(!token){
            throw new AppError(httpStatus.UNAUTHORIZED,"You are not an authorized user")
        }
        //check the token is valid
        const decoded= jwt.verify(token,config.JWT_SECREATE as string) as JwtPayload
        const role=(decoded as JwtPayload).role
        if(RequiredRole && !RequiredRole.includes(role)){
            throw new AppError(httpStatus.UNAUTHORIZED,"You are not an authorized user")
        }

        const user=await userModel.findOne({id:decoded.userId}).select("+password")

        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
        }
        const isDeleted = user?.isDeleted;

        if (isDeleted) {
            throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
        }
        const userStatus = user?.status;

        if (userStatus === 'blocked') {
        throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
        }

        const isValidateTime=(iat:number,passwordChangeAt:Date):boolean=>{
            const changeTime=new Date(passwordChangeAt).getTime()/1000
            return changeTime > iat
        }
       
        if(isValidateTime((decoded!.iat) as number,(user!.passwordChangeAt) as Date)){
            throw new AppError(httpStatus.UNAUTHORIZED,"You are not an authorized user")
        }
        
        req.user=decoded as JwtPayload
        next()
    })
}
export default auth