import generateExpenseId from "../../utils/expenseId"
import { TExpense } from "./expense.interface"
import expenseModel from "./expense.model"

const createExpense=async (payLoad:TExpense)=>{
    const totalBazar=(await expenseModel.find()).length
    const expenseId=generateExpenseId(Number(totalBazar))
    if(payLoad){
        payLoad.expenseId=expenseId
    }
    const result=await expenseModel.create(payLoad)
    return result;
}
export const expenseService={
    createExpense
}