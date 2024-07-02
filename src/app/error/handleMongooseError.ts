import mongoose from "mongoose";

const handleMongooseError = (err: mongoose.Error.ValidationError) => {
    const errorSources = Object.values(err.errors).map((item: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
        return {
            path: item.path,
            message: item.message
        }
    })
    return {
        statusCode: 400,
        message: err.message,
        errorSources
    }
}
export default handleMongooseError;