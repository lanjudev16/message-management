import { z } from 'zod'
const expenseValidateSchema = z.object({
    body: z.object({
        description: z.string({
            message: "Description is required",
            invalid_type_error: "Invalid type",
            required_error: "Description is required"
        }),
        amount: z.number({
            required_error: "Amount is required",
            invalid_type_error: "Amount type is number"
        }),
        userId: z.string({
            required_error: "UserId is required",
            invalid_type_error: "UserId type is mongose userId"
        }),
        bazarImage1: z.string({
            invalid_type_error: "bazarImage1 type is url"
        }).optional(),
        bazarImage2: z.string({
            invalid_type_error: "bazarImage2 type is url"
        }).optional()
    })

})
export default expenseValidateSchema;