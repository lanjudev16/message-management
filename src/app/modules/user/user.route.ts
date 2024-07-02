import express from 'express'
import { userController } from './user.controller'
import { borderValidateSchema } from '../border/border.validation'
import validateRequest from '../../middlewares/validateRequest'
const router=express.Router()
router.post('/create-border',
    validateRequest(borderValidateSchema),
    userController.createBorder)
const userRouter=router
export default userRouter