import express from 'express'
import { savingController } from './saving.controller'

const router=express.Router()
router.post('/create-saving',
    savingController.createSaving)
router.put('/update-saving',
    savingController.updateSaving)
const savingRouter=router
export default savingRouter