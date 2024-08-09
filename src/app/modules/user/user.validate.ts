import { z } from 'zod'
const userValidateSchema = z.object({
    password:z.string({ invalid_type_error: "password is not this type give me string type", required_error: "password is required" }).max(20).optional(),
})
const adminValidateSchema = z.object({
    password:z.string({ invalid_type_error: "password is not this type give me string type", required_error: "password is required" }).max(20).optional(),
})
export const userValidation={
    userValidateSchema,
    adminValidateSchema
}