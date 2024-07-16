import { Types } from "mongoose";

export type TMonthSummary={
    summaryId?:string;
    month:string;
    totalExpenses?:number;
    totalMeals?:number;
    totalCost?:number;
    costPerMeal?:number;
    users:Types.ObjectId;
}