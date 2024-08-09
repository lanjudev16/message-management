import { Router } from "express"
import { adminController } from "./admin.controller"

const route=Router()
route.get('/',adminController.adminRetrive)
route.get('/:id',adminController.SingleAdminRetrive)
const adminRoute=route
export default adminRoute