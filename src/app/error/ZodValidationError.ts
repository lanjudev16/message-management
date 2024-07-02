import { ZodError, ZodIssue } from "zod"
import { TGenericError } from "../types/error"

const handleZodError=(err:ZodError):TGenericError=>{
    const errorSources=err.issues.map((issue:ZodIssue)=>{
        return {
            path:issue.path[issue.path.length-1],
            message:issue.message,
        }
    })
    return{
        statusCode:400,
        message:"Validation error",
        errorSources
    }
}
export default handleZodError