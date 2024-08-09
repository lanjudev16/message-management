import { TSaving } from "./saving.interface"
import { savingModel } from "./saving.model"

const savingCreate=async(payLoad:TSaving)=>{
    const result=await savingModel.create(payLoad)
    return result
}
const updateSaving=async(payLoad:TSaving)=>{
    const result=await savingModel.findOneAndUpdate({user:payLoad.user},{ammount:payLoad.ammount},{new:true,runValidators:true})
    return result
}
export const savingService={
    savingCreate,
    updateSaving
}