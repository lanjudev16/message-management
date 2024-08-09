import httpStatus from "http-status";
import config from "../../config";
import AppError from "../../error/AppError";
import generateId from "../../utils/generateId";
import { TBorder } from "../border/border.interface";
import BorderModel from "../border/border.model";
import { TUser } from "./user.interface";
import { userModel } from "./user.model";
import mongoose from "mongoose";
import { TAdmin } from "../admin/admin.interface";
import { admin } from "./user.utils";
import { number } from "zod";
import { adminModel } from "../admin/admin.model";

const createBorder = async (password: string, border: TBorder) => {
    const userData: Partial<TUser> = {};
    userData.password = password || config.default_password;
    userData.role = "border";
    
    const totalBorder = (await userModel.find()).length;
    userData.id = generateId(totalBorder).toString().padStart(4, '0');
    
    const session = await mongoose.startSession();
    session.startTransaction();
    
    try {
        const result = await userModel.create([userData], { session });
        if (!result.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new user");
        }

        border.id = result[0].id;
        border.user = result[0]._id;

        const borderResult = await BorderModel.create([border], { session });
        if (!borderResult.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new border");
        }

        await session.commitTransaction();
        return result;
    } catch (err) {
        await session.abortTransaction();
        throw new AppError(httpStatus.BAD_REQUEST, "Failed transaction", "");
    } finally {
        session.endSession();
    }
};
const createAdmin=async(password:string,payLoad:TAdmin)=>{
    const userData:Partial<TUser>={}
    userData.password=password || config.default_password as string
    userData.role="admin"

    const totalBorder = (await adminModel.find()).length;
    userData.id = admin.generateAdminId(totalBorder).toString().padStart(4, '0');

    const session=await mongoose.startSession()
    session.startTransaction()
    try{

        const createUser=await userModel.create([userData],{session})
        if(!createUser.length){
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new user");
        }

        payLoad.user=createUser[0]._id
        payLoad.id=createUser[0].id
        const adminResult=await adminModel.create([payLoad],{session})
        if (!adminResult.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create new border");
        }
        await session.commitTransaction();
        return createUser;
    }catch(err){
        console.error("Error during transaction:", err);
        await session.abortTransaction()
        throw new AppError(httpStatus.BAD_REQUEST, "Failed transaction");
    }finally{
        await session.endSession()
    }
}
const updateBorderToManagerRole=async(id:string)=>{
    const result=await userModel.findOneAndUpdate(
    {id:id},
    {
        role:"manager"
    },
    {
        new:true,
        runValidators:true
    })
    return result
}
export const userServices = {
    createBorder,
    createAdmin,
    updateBorderToManagerRole
};
