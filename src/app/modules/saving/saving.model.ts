import { model, Schema } from "mongoose";
import { TSaving } from "./saving.interface";

const savingSchema=new Schema<TSaving>({
    ammount:{
        type:Number,
        required:[true,"Ammount is required"]
    },
    user:{
        type:Schema.Types.ObjectId,
        required:[true,"User is required"]
    }
}
,
{
    timestamps:true
}
)
export const savingModel=model('savingModel',savingSchema)
