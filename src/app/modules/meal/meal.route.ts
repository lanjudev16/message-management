import { Router } from "express";
import { mealController } from "./meal.controller";

const router=Router()
router.post('/create-meal',mealController.mealCreate)
const mealRouter=router
export default mealRouter