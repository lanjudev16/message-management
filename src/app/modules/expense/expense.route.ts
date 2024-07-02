import { Router } from "express"
import { expenseController } from "./expense.controller"
import validateRequest from "../../middlewares/validateRequest"
import expenseValidateSchema from "./expense.validate"
const router = Router()
router.post('/create-expense',validateRequest(expenseValidateSchema),expenseController.createExpense)
const expenseRouter = router
export default expenseRouter