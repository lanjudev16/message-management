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
const getExpense=async()=>{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const startOfMonth = new Date(currentYear, currentMonth-1, 1);
    const endOfMonth = new Date(currentYear, currentMonth, 0); 
    const result=await expenseModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth}})
    return result;
}

export const expenseService={
    createExpense,
    getExpense
}