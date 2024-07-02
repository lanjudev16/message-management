import QueryBuilder from "../../builder/QueryBuilder"
import { searchableFields } from "../../constants/constants"
import BorderModel from "./border.model"
const getAllBorder = async (query: Record<string, unknown>) => {
    const borderBuilder = new QueryBuilder(BorderModel.find(), query).search(searchableFields)
    const result = await borderBuilder.modelQuery


    
    return result
}
const getSingleBorder = async (id: string) => {
    const result = await BorderModel.findById(id)
    return result
}

export const BorderService = {
    getAllBorder,
    getSingleBorder
}