import express from 'express'
import { userController } from './user.controller'
import { borderValidateSchema } from '../border/border.validation'
import validateRequest from '../../middlewares/validateRequest'
import { AdminValidations } from '../admin/admin.validate'
import auth from '../../middlewares/auth'
const router=express.Router()
router.post('/create-border',
    validateRequest(borderValidateSchema),
    // auth(),
    userController.createBorder)
router.post('/create-admin',
    validateRequest(AdminValidations.createAdminValidationSchema),
    userController.createAdmin)
router.put('/update-border-to-manager-role/:id',
    userController.updateBorderToManagerRole)
const userRouter=router
export default userRouter