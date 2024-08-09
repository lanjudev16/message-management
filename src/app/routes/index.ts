import { Router } from "express"
import { borderRouter } from "../modules/border/border.route"
import userRouter from "../modules/user/user.route"
import expenseRouter from "../modules/expense/expense.route"
import mealRouter from "../modules/meal/meal.route"
import summaryRouter from "../modules/monthlySummary/monthlySummary.route"
import { authRouter } from "../modules/auth/login.route"
import adminRoute from "../modules/admin/admin.route"
import savingRouter from "../modules/saving/saving.route"
const router = Router()

const modulesRoutes = [
    {
        path:"/auth",
        route:authRouter
    },
    {
        path: "/users",
        route: userRouter
    },
    {
        path: "/borders",
        route: borderRouter
    },
    {
        path: "/saving",
        route: savingRouter
    },
    {
        path: "/admin",
        route: adminRoute
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