// src/i18n/useLangPath.js
import { useLocation, useNavigate } from "react-router-dom";
import { PAGE_PATHS } from "@/constants/routes";

export function useLangPath() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const isEn = /^\/en(\/|$)/.test(pathname);

    // 基於配置檔案動態生成有效路徑
    const validPaths = [
        ...PAGE_PATHS.map(path => path === "" ? "/" : `/${path}`),
        "/404"
    ];
    
    const pathWithoutLang = pathname.replace(/^\/en(\/|$)/, '/').replace(/^\/$/, '') || '/';
    const isValidPath = validPaths.includes(pathWithoutLang) || pathname.startsWith('/404');
    

    // 檢查是否在 404 頁面
    const is404 = pathname.startsWith('/404') || !isValidPath;;
    const is404En = pathname === '/404/en' || (!isValidPath && isEn);

    // 依目前語言加上/移除 /en 前綴
    const build = (path, opts) => {
        const target = opts?.lang ?? (isEn || is404En ? "en" : "zh");

        // 特殊處理 404 路徑
        if (path.startsWith('/404')) {
            return target === "en" ? "/404/en" : "/404";
        }

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
        if (is404) {
            // 在 404 頁面時的語系切換
            const next = to === 'zh' ? "/404" : `/404/${to}`;
 
            navigate(next, { replace: true });
            return;
        }

        if (to === "en" && !isEn) {
            const next = pathname.startsWith("/en") ? pathname : `/en${pathname === "/" ? "" : pathname}`;
            navigate(next, { replace: true });
            
        } else if (to === "zh" && isEn) {
            const next = pathname.replace(/^\/en(\/|$)/, "") || "/";
            navigate(next, { replace: true });
        }
    };

    return { build, 
        switchLang, 
        isEn: isEn || is404En,
        is404,
        is404En
    };
}
