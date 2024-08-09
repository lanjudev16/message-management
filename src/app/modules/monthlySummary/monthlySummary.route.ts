import { Router } from "express";
import { monthlySummaryController } from "./monthlySummary.controller";

const router=Router()
router.post('/create-summary',monthlySummaryController.monthlySummaryCreate)
router.get('/get-summary/:id',monthlySummaryController.monthlySummaryGetSingleUser)
router.get('/get-all-summary',monthlySummaryController.getMonthlySummaryData)
const summaryRouter=router
export default summaryRouter