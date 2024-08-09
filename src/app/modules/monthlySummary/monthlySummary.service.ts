import { Types } from "mongoose";
import { generateId } from "../../utils/GenerateId/monthlySummary"
import BorderModel from "../border/border.model";
import { TExpense } from "../expense/expense.interface";
import expenseModel from "../expense/expense.model";
import { TMeal } from "../meal/meal.interface";
import mealModel from "../meal/meal.model";
import { savingModel } from "../saving/saving.model";
import { TDate, TMonthSummary } from "./monthlySummary.interface"
import monthlySummaryModel from "./monthlySummary.model";

const monthlySummaryCreate=async(payLoad:TMonthSummary,date:TDate)=>{
    const currentDate = new Date(date.currentDate);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const startOfMonth = new Date(date.startDate);
    const endOfMonth = new Date(currentYear, currentMonth, 0); 
    const allExpense=await expenseModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth}})
    const totalExpens=allExpense.reduce((acc,current:TExpense)=>acc+current.amount,0)
    const allMeals=await mealModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth}})
    const totalMeals=allMeals.reduce((acc,current:TMeal)=>acc+current.mealCount,0)
    const costPerMeal=totalExpens/totalMeals
    const singleUserMeals=await mealModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth},userId:payLoad.users})
    const totalMealsSingleUser=singleUserMeals.reduce((acc,current:TMeal)=>acc+current.mealCount,0)
    const totalCostSingleUser=totalMealsSingleUser*costPerMeal
    const month=generateId.getMonth(currentMonth) as string
    const savingMoney=await savingModel.findOne({createdAt:{$gt:startOfMonth,$lte:endOfMonth},user:payLoad.users})
    const userData=await BorderModel.findOne({_id:payLoad.users})
    const name=`${userData?.name.firstName} ${userData?.name.middleName} ${userData?.name.lastName}`
    const savingGetMoney=savingMoney?.ammount as number
    const returnMoney=savingGetMoney-totalCostSingleUser;
    const userInfo={
        name:name,
        month:month,
        savingMoney:savingMoney?.ammount,
        totalExpenses:totalExpens,
        costPerMeal:costPerMeal,
        totalMeals:totalMealsSingleUser,
        totalCost:totalCostSingleUser,
        returnMoney:returnMoney,
        users:payLoad.users
    }
    const result=await monthlySummaryModel.create(userInfo)
    return result
}
const monthlySummaryGetSingleUser=async(payLoad:string,body:TDate)=>{
    const currentDate = new Date(body.currentDate);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const startOfMonth = new Date(body.startDate);
    const endOfMonth = new Date(currentYear, currentMonth, 0); 
    const allExpense=await expenseModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth}})
    const totalExpens=allExpense.reduce((acc,current:TExpense)=>acc+current.amount,0)
    const allMeals=await mealModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth}})
    const totalMeals=allMeals.reduce((acc,current:TMeal)=>acc+current.mealCount,0)
    const costPerMeal=totalExpens/totalMeals
    const singleUserMeals=await mealModel.find({createdAt:{$gt:startOfMonth,$lte:endOfMonth},userId:payLoad})
    const totalMealsSingleUser=singleUserMeals.reduce((acc,current:TMeal)=>acc+current.mealCount,0)
    const totalCostSingleUser=totalMealsSingleUser*costPerMeal
    const month=generateId.getMonth(currentMonth) as string
    const savingMoney=await savingModel.findOne({createdAt:{$gt:startOfMonth,$lte:endOfMonth},user:payLoad})
    const userData=await BorderModel.findOne({_id:payLoad})
    const name=`${userData?.name.firstName} ${userData?.name.middleName} ${userData?.name.lastName}`
    const savingGetMoney=savingMoney?.ammount as number
    const returnMoney=savingGetMoney-totalCostSingleUser;
    
    const userInfo={
        name:name,
        month:month,
        savingMoney:savingMoney?.ammount,
        mealRate:costPerMeal,
        totalMealsEat:totalMealsSingleUser,
        totalCost:totalCostSingleUser,
        returnMoney:returnMoney
    }
    
    return userInfo
}
const getMonthlySummaryData=async()=>{
    const result=await monthlySummaryModel.find()
    return result

}
export const monthlySummaryService={
    monthlySummaryCreate,
    monthlySummaryGetSingleUser,
    getMonthlySummaryData
}