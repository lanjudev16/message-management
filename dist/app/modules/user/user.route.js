"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const border_validation_1 = require("../border/border.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const router = express_1.default.Router();
router.post('/create-border', (0, validateRequest_1.default)(border_validation_1.borderValidateSchema), user_controller_1.userController.createBorder);
const userRouter = router;
exports.default = userRouter;
