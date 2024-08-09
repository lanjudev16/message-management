import { Types } from "mongoose";

export type TMonthSummary={
    summaryId?:string;
    name:string;
    savingMoney?:number;
    month?:string;
    totalExpenses?:number;
    totalMeals?:number;
    totalCost?:number;
    costPerMeal?:number;
    returnMoney?:number;
    users:Types.ObjectId;
}
export type TDate={
    currentDate:string;
    startDate:string;
}