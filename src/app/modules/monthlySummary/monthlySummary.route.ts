import { Router } from "express";
import { monthlySummaryController } from "./monthlySummary.controller";

const router=Router()
router.post('/create-summary',monthlySummaryController.monthlySummaryCreate)
const summaryRouter=router
export default summaryRouter