import { Types } from "mongoose";

export type TExpense = {
    expenseId?: string;
    userId: Types.ObjectId;
    description: string;
    bazarImage1?:string;
    bazarImage2?:string;
    amount: number;
}