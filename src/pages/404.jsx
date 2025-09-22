import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useTheme } from "@/contexts/ThemeContext";
import { useLangPath } from "@/i18n/useLangPath";
import { Button } from "@/components/ui/button";
import ThemeLogo from "@/components/ThemeLogo";

export default function NotFound() {
    const { build } = useLangPath();
    const [t] = useTranslation();
    const { isDark } = useTheme();

    const src = isDark ? '/logo-light-256.webp' : '/logo-dark-256.webp' ;
    const srcSet =  isDark ? '/logo-light-128.webp 128w, /logo-light-256.webp 256w' 
        : '/logo-dark-128.webp 128w, /logo-dark-256.webp 256w';

    useEffect(() => {
        const prevTitle = document.title;

        // 設定 title
        document.title = "404 Not Found";

        // 設定 <meta name="robots" content="noindex">
        let meta = document.querySelector('meta[name="robots"]');
        const created = !meta;
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", "robots");
            document.head.appendChild(meta);
        }
        const prevContent = meta.getAttribute("content");
        meta.setAttribute("content", "noindex");

        // 離開頁面還原
        return () => {
            document.title = prevTitle;
            if (created) {
                meta?.parentNode?.removeChild(meta);
            } else if (prevContent !== null) {
                meta.setAttribute("content", prevContent);
            } else {
                meta.removeAttribute("content");
            }
        };
    }, []);

    return (
        <section className="container max-w-4xl py-24 text-center space-y-4">
            {/* Logo */}
            <div className="flex justify-center">
                <ThemeLogo
                    name={`${isDark ? 'light' : 'dark'}-404-logo`}
                    src={src}
                    srcSet={srcSet}
                />
            </div>
            <h1 className="text-3xl font-bold">{t('404.title')}</h1>
            <p className="opacity-80">{t('404.desc')}</p>
            <Button asChild><Link to={build("/")}>{t('404.back')}</Link></Button>
        </section>
    );
}
