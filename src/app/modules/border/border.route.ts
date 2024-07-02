import express from 'express'
import { BorderController } from "./border.controller";

const router=express.Router()
router.get('/get-all-border',BorderController.getAllBorder)
router.get('/get-single-border/:id',BorderController.getSingleBorder)
export const borderRouter=router