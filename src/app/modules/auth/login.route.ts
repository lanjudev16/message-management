import express from 'express'
import { loginController } from './login.controller'
import validateRequest from '../../middlewares/validateRequest'
import { validateAuth } from './login.validate'
import auth from '../../middlewares/auth'
import { USER_ROLL } from '../user/user.constant'

const router=express.Router()
router.post('/login',loginController.login)
router.post('/change-password',auth(USER_ROLL.admin,USER_ROLL.border),validateRequest(validateAuth.validateChangePasswordSchema),loginController.changePassword)
router.post('/refresh-token',
    // validateRequest(validateAuth.validateRefreshTokenSchema),
    loginController.refreshToken)
export const authRouter=router