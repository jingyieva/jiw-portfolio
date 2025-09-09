// src/routes/LanguageLayout.tsx
import { useEffect } from "react";
import { Outlet, useParams, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function LanguageLayout() {
    const { lang } = useParams(); // undefined | "en"
    const { i18n } = useTranslation();
    // 路由參數 → i18n & <html lang>
    useEffect(() => {
        const next = lang === "en" ? "en" : "zh";
        if (i18n.language !== next) i18n.changeLanguage(next);
        document.documentElement.lang = next === "zh" ? "zh-TW" : "en";
    }, [lang, i18n]);

    return <Outlet />;
}
