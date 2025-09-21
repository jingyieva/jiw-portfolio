// src/config/routes.js
import { lazy } from "react";

// 只抽取頁面路徑，不是完整路由配置
export const PAGE_PATHS = [
    "",
    "projects", 
    "about",
    "updates"
];

// 頁面組件配置
export const PAGE_COMPONENTS = {
    "": lazy(() => import("@/pages/Home")),
    "projects": lazy(() => import("@/pages/Projects")), 
    "about": lazy(() => import("@/pages/About")),
    "updates": lazy(() => import("@/pages/Updates"))
};