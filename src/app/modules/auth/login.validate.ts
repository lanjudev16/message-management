import {z} from 'zod'
const validateLoginSchema=z.object({
    id:z.string({
        required_error:"Id is required for login",
        invalid_type_error:"String is required"
    }),
    password:z.string({
        required_error:"Id is required for login",
        invalid_type_error:"String is required"
    })
})
const validateChangePasswordSchema=z.object({
    body:z.object(
        {
            oldPassword:z.string({
                required_error:"Old password is required",
                invalid_type_error:"String is required"
            }),
            newPassword:z.string({
                required_error:"new password is required",
                invalid_type_error:"String is required"
            })
        }
    )
})
const validateRefreshTokenSchema=z.object({
    cookies:z.object(
        {
            refreshToken:z.string({
                required_error:"Refresh password is required",
                invalid_type_error:"String is required"
            })
        }
    )
})
export const validateAuth={
    validateChangePasswordSchema,
    validateRefreshTokenSchema
}