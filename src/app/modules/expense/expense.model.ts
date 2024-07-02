import { Schema, model } from "mongoose";
import { TExpense } from "./expense.interface";

const expenseSchema = new Schema<TExpense>({
    expenseId: {
        type: String,
        required: false
    },
    description:{
        type:String,
        required:[true,'Description true']
    },
    amount:{
        type:Number,
        required:[true,'Total ammount required']
    },
    userId:{
        type:Schema.Types.ObjectId,
        required:[true,'UserId is required'],
        ref:"userModel"
    },
    bazarImage1:{
        type:String,
        required:[false,'bazarImage1 is required'],
    },
    bazarImage2:{
        type:String,
        required:[false,'bazarImage2 is required'],
    },
},
{
    timestamps:true,
}
)

const expenseModel=model('expenseModel',expenseSchema)
export default expenseModel;