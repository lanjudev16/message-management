import cors from "cors"
import express, { Application, Request, Response } from "express"
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { notFound } from "./app/middlewares/notFound";
import router from "./app/routes";
const app:Application = express()
//parser
app.use(express.json())
app.use(cors())

//application route
app.use('/api/v1',router)

//Home route
app.get('/', (req:Request, res:Response) => {
    res.send('Hello World!')
})
// global error handler
app.use(globalErrorHandler)
// not found 
app.use(notFound)
export default app
