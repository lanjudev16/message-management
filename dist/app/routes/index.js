"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const border_route_1 = require("../modules/border/border.route");
const user_route_1 = __importDefault(require("../modules/user/user.route"));
const expense_route_1 = __importDefault(require("../modules/expense/expense.route"));
const router = (0, express_1.Router)();
const modulesRoutes = [
    {
        path: "/users",
        route: user_route_1.default
    },
    {
        path: "/borders",
        route: border_route_1.borderRouter
    },
    {
        path: '/expense',
        route: expense_route_1.default
    }
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
