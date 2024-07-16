import { Router } from "express"
import { borderRouter } from "../modules/border/border.route"
import userRouter from "../modules/user/user.route"
import expenseRouter from "../modules/expense/expense.route"
import mealRouter from "../modules/meal/meal.route"
import summaryRouter from "../modules/monthlySummary/monthlySummary.route"
const router = Router()

const modulesRoutes = [
    {
        path: "/users",
        route: userRouter
    },
    {
        path: "/borders",
        route: borderRouter
    },
    {
        path:'/expense',
        route:expenseRouter
    },
    {
        path:'/meal',
        route:mealRouter
    },
    {
        path:'/summary',
        route:summaryRouter
    },
]
modulesRoutes.forEach((route) => router.use(route.path, route.route))
export default router;