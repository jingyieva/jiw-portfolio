// src/routes/LanguageLayout.tsx
import { useEffect } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { LANGS } from "@/constants";

export default function LanguageLayout() {
    const { lang } = useParams(); // undefined | "en"
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const SUPPORTED_LANGUAGES = LANGS.map(({ code }) => code);
    const isInvalidLang = lang && !SUPPORTED_LANGUAGES.includes(lang);

    // 處理無效語系：重定向到 404 並保持語系參數
    useEffect(() => {
        if (isInvalidLang) {
            const currentLang = i18n.language || "zh";
            const redirectPath = currentLang === "zh" ? "/404/zh" : `/404/${currentLang}`;
            console.log(`redirectPath: ${redirectPath}`)
            navigate(redirectPath, { replace: true });
        }
    }, [lang, i18n, navigate, location.pathname]);

    // 處理語系切換
    useEffect(() => {
        // 只有在語系有效時才執行
        if(!lang || SUPPORTED_LANGUAGES.includes(lang)){
            const next = lang || "zh";
            if (i18n.language !== next) {
                i18n.changeLanguage(next);
            }
            document.documentElement.lang = next === "zh" ? "zh-TW" : next;
        
        }
    }, [lang, i18n]);

    if (isInvalidLang) {
        return null; // 等待重定向
    }

    return (
        <Outlet />
    );
}   