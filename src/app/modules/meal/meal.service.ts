import generateMealId from "../../utils/generateMealId"
import { TMeal } from "./meal.interface"
import mealModel from "./meal.model"

const mealCreate=async(payLoad:TMeal)=>{
    const totalMeal= (await mealModel.find()).length
    if(payLoad){
        payLoad.mealId=generateMealId(totalMeal)
    }
    const result=await mealModel.create(payLoad)
    return result;
}
export const mealService={
    mealCreate
}