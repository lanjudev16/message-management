import { generateId } from "../../utils/GenerateId/monthlySummary"
import { TExpense } from "../expense/expense.interface";
import expenseModel from "../expense/expense.model";
import { TMeal } from "../meal/meal.interface";
import mealModel from "../meal/meal.model";
import { TMonthSummary } from "./monthlySummary.interface"
import monthlySummaryModel from "./monthlySummary.model";

const monthlySummaryCreate=async(payLoad:TMonthSummary)=>{
    const id=generateId.monthlySummaryId()
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const startOfMonth = new Date(currentYear, currentMonth-1, 1);
    const endOfMonth = new Date(currentYear, currentMonth, 0); 
    const allExpense=await expenseModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth}})
    const totalExpens=allExpense.reduce((acc,current:TExpense)=>acc+current.amount,0)
    const allMeals=await mealModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth}})
    const totalMeals=allMeals.reduce((acc,current:TMeal)=>acc+current.mealCount,0)
    const costPerMeal=totalExpens/totalMeals
    const singleUserMeals=await mealModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth},userId:payLoad.users})
    const totalMealsSingleUser=singleUserMeals.reduce((acc,current:TMeal)=>acc+current.mealCount,0)
    const totalCostSingleUser=totalMealsSingleUser*costPerMeal
    payLoad.summaryId=id
    payLoad.month=generateId.getMonth(currentMonth) as string
    payLoad.totalExpenses=totalExpens
    payLoad.totalMeals=totalMeals
    payLoad.costPerMeal=costPerMeal
    payLoad.totalCost=totalCostSingleUser
    const result=await monthlySummaryModel.create(payLoad)
    return result
}
export const monthlySummaryService={
    monthlySummaryCreate
}