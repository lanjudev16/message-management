export type TUser = {
    id?: string,
    password?: string,
    needPasswordChanged: boolean,
    role: 'admin' | 'border' | 'manager',
    status: 'in-progress' | 'blocked',
    isDeleted: boolean,
}