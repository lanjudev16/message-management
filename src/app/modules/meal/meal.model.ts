import { Schema, model } from "mongoose";
import { TMeal } from "./meal.interface";

const mealSchema=new Schema<TMeal>({
    mealId:{
        type:String,
        required:[false,"MealId Is not required"],
    },
    description:{
        type:String,
        required:[true,"Description is required"]
    },
    mealCount:{
        type:Number,
        required:[true,"meal count is required"]
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:[true,"User id is required"],
        ref:"userModel"
    }
},{
    timestamps:true
})
const mealModel=model('mealModel',mealSchema)
export default mealModel