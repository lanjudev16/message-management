/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import config from "../config";
import { TErrorSources, TGenericError } from "../types/error";
import { ZodError, ZodIssue } from "zod";
import handleZodError from "../error/ZodValidationError";
import handleMongooseError from "../error/handleMongooseError";
import handleCastError from "../error/handleCastError";
import handleDuplicateError from "../error/handleDuplicateError";
import AppError from "../error/AppError";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = err.statusCode || 500
    let message = err.message || "Something went wrong"
    let errorSources: TErrorSources = [{
        path: '',
        message: 'Something went wrong'
    }]


    if (err instanceof ZodError) {
        const simplifyError = handleZodError(err)
        statusCode = simplifyError.statusCode,
        message = simplifyError.message,
        errorSources = simplifyError.errorSources
    }else if(err.name=="ValidationError"){
        const simplifyError=handleMongooseError(err)
        statusCode=simplifyError.statusCode,
        message=simplifyError.message,
        errorSources=simplifyError.errorSources
    }else if(err.name=="CastError"){
        const simplifyError=handleCastError(err)
        statusCode=simplifyError.statusCode,
        message=simplifyError.message,
        errorSources=simplifyError.errorSources
    }
    else if(err?.name=="CastError"){
        const simplifyError=handleDuplicateError(err)
        statusCode=simplifyError.statusCode,
        message=simplifyError.message,
        errorSources=simplifyError.errorSources
    }
    else if(err instanceof AppError){
        statusCode=err.statusCode,
        message=err.message,
        errorSources=[{
            path:"",
            message:err.message
        }]
    }
    else if(err instanceof Error){
        message=err.message,
        errorSources=[{
            path:"",
            message:err.message
        }]
    }
    return res.status(statusCode).json({
        success: false,
        message: message,
        errorSources,
        stack: config.NODE_ENV == "development" ? err?.stack : null,
    })
}