import { Types } from "mongoose";

export type TMeal={
    mealId?:string;
    description:string;
    userId:Types.ObjectId
    mealCount:number;
}