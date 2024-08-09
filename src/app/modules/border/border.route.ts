import express from 'express'
import { BorderController } from "./border.controller";
import auth from '../../middlewares/auth';
import { USER_ROLL } from '../user/user.constant';

const router=express.Router()
router.get('/get-all-border',
    auth(USER_ROLL.admin),
    BorderController.getAllBorder)
router.get('/get-single-border/:id',BorderController.getSingleBorder)
export const borderRouter=router