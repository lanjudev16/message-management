import { Request, Response } from "express";
import httpStatus from "http-status";

export const notFound=(rsq:Request,res:Response)=>{
    res.status(httpStatus.NOT_FOUND).json({
        success:false,
        message:"Api not found",
        error:""
    })
}