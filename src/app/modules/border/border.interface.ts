import { Types } from "mongoose"

export type TGurdian={
    fatherName:string,
    fatherContactNumber:string,
    fatherOccupation:string,
    matherName:string,
    matherOccupation:string,
    matherNumber:string
}
export type TUserName={
    firstName:string,
    middleName?:string,
    lastName:string
}
export type TLocalGurdian={
    name:string,
    occupation:string,
    contactNumber:string,
    address:string
}
export type TBorder={
    id?:string,
    name:TUserName,
    user:Types.ObjectId,
    gender:"male"|"female",
    dateOfBirth?:string,
    email:string,
    avatar?:string,
    contactNumber:string,
    emergencyContactNumber:string,
    bloodGroup:"A+"|"A-"|"B+"|"B-"|"O+"|"O-"|"AB+"|"AB-",
    presentAddress:string,
    permanentAddress:string,
    gardian:TGurdian,
    localGurdian:TLocalGurdian,
    profileImage?:string,
    isActive:"active"|"inactive"
}
