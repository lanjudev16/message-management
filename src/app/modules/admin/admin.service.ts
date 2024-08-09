import { adminModel } from "./admin.model"

const adminRetrive=async()=>{
    const result=await adminModel.find().populate('user')
    return result
}
const singleAdminRetrive=async(id:string)=>{
    const result=await adminModel.findById(id);
    return result
}
export const adminService={
    adminRetrive,
    singleAdminRetrive
}