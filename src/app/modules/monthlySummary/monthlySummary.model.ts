import { model, Schema } from "mongoose";
import { TMonthSummary } from "./monthlySummary.interface";
import { monthNames } from "../../utils/constant";
import { number } from "zod";

const monthlySummarySchema=new Schema<TMonthSummary>({
    summaryId:{
        type:String,
        required:[false,'Summary is not required']
    },
    name:{
        type:String,
        required:[true,'Name is  required']
    },
    savingMoney:{
        type:Number,
        required:[true,'Saving money is not required']
    },
    returnMoney:{
        type:Number,
        required:[true,'Return money is  required']
    },
    month:{
        type:String,
        enum:[
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
          ],
        required:[true,"Month name is required"]
    },
    totalExpenses:{
        type:Number,
        required:[false,"Total expense is not required"]
    },
    totalCost:{
        type:Number,
        required:[false,"Total cost is not required"]
    },
    totalMeals:{
        type:Number,
        required:[false,"Total meals is not required"]
    },
    costPerMeal:{
        type:Number,
        required:[false,"cost per meal is not required"]
    },
    users:{
        type:Schema.Types.ObjectId,
        required:[true,"users is not required"],
        ref:"BorderModel"
    }

})
const monthlySummaryModel=model("monthlySummaryModel",monthlySummarySchema)
export default monthlySummaryModel;