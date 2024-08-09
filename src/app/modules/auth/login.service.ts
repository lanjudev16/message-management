import httpStatus from "http-status";
import AppError from "../../error/AppError";
import { userModel } from "../user/user.model"
import { TLogin } from "./login.interface"
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../../config";

const login=async(payLoad:TLogin)=>{
    const user=await userModel.findOne({id:payLoad.id})
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
    const isPasswordMathched=await userModel.findOne({id:payLoad.id,password:payLoad.password})
    if(!isPasswordMathched){
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
    }
    const jwtPayload = {
        userId: user.id,
        role: user.role,
    };
    const accessToken=jwt.sign(jwtPayload,config.JWT_SECREATE as string,{
        expiresIn:config.jwt_access_expire_in
    })
    const refreshToken=jwt.sign(jwtPayload,config.jwt_refresh_screate as string,{
        expiresIn:config.jwt_refresh_expire_in
    })
    return {accessToken:accessToken,refreshToken:refreshToken}
}
const changePassword=async(payLoad:any)=>{
    const user=await userModel.findOne({id:payLoad.user.userId}).select("+password")
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
    const isPasswordMathched=await userModel.findOne({id:payLoad.user.userId,password:payLoad.body.oldPassword}).select("+password")
    if(!isPasswordMathched){
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
    }
    const result=await userModel.findOneAndUpdate({id:payLoad.user.userId,role:payLoad.user.role},
    {
        password:payLoad.body.newPassword,
        needPasswordChanged:false
    }
    ,
    {new:true,
        runValidators:true
    })
    return result;
}
const refreshToken=async(token:string)=>{

    if(!token){
        throw new AppError(httpStatus.UNAUTHORIZED, 'Unauthrized access');
    }
    try{
        const decode=jwt.verify(token,config.jwt_refresh_screate as string) as JwtPayload
        const userId=decode.userId
        const role=decode.role
        const user=await userModel.findOne({id:userId}).select("+password")
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
        const userToken={
            userId,role
        }
        const accessToken=jwt.sign(userToken,config.JWT_SECREATE as string,{
            expiresIn:config.jwt_access_expire_in
        })
        return accessToken;
    }catch(err:any){
        throw new AppError(httpStatus.NOT_EXTENDED, err);
    }
}
export const loginService={
    login,
    changePassword,
    refreshToken
}