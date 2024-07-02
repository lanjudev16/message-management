"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borderRouter = void 0;
const express_1 = __importDefault(require("express"));
const border_controller_1 = require("./border.controller");
const router = express_1.default.Router();
router.get('/get-all-border', border_controller_1.BorderController.getAllBorder);
router.get('/get-single-border/:id', border_controller_1.BorderController.getSingleBorder);
exports.borderRouter = router;
