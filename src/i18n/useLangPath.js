// src/i18n/useLangPath.js
import { useLocation, useNavigate } from "react-router-dom";

export function useLangPath() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    
    const isEn = /^\/en(\/|$)/.test(pathname);

    // 依目前語言加上/移除 /en 前綴
    const build = (path, opts) => {
        const target = opts?.lang ?? (isEn ? "en" : "zh");

        // 正規化 path
        const clean =
            path === "" || path === "/"
                ? "" // index 頁
                : path.startsWith("/")
                ? path
                : `/${path}`;

            if (target === "en") {
            // 英文：/en + 子路徑（index => /en）
            return `/en${clean}`;
        }
        // 中文：index => "/"，其餘保持相對子路徑
        return clean || "/";
    };
    
    // 語言切換：停留在同一路徑
    const switchLang = (to) => {
        if (to === "en" && !isEn) {
            const next = pathname.startsWith("/en") ? pathname : `/en${pathname === "/" ? "" : pathname}`;
            navigate(next, { replace: true });
        } else if (to === "zh" && isEn) {
            const next = pathname.replace(/^\/en(\/|$)/, "") || "/";
            navigate(next, { replace: true });
        }
    };

    return { build, switchLang, isEn };
}
