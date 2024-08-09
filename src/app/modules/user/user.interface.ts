import { USER_ROLL } from "./user.constant"

export type TUser = {
    id?: string,
    password?: string,
    passwordChangeAt?:Date;
    needPasswordChanged: boolean,
    role: 'admin' | 'border' | 'manager',
    status: 'in-progress' | 'blocked',
    isDeleted: boolean,
}
export type TUserRoll=keyof typeof USER_ROLL