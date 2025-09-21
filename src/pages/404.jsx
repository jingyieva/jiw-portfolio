import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useLangPath } from "@/i18n/useLangPath";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const { build } = useLangPath();
    const [t] = useTranslation();

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
                <img
                    src="/logo-light.png"
                    alt="Not Found"
                    className="w-48 h-48 hidden dark:block"
                />
                <img
                    src="/logo-dark.png"
                    alt="Not Found"
                    className="w-48 h-48 dark:hidden"
                />
            </div>
            <h1 className="text-3xl font-bold">{t('404.title')}</h1>
            <p className="opacity-80">{t('404.desc')}</p>
            <Button asChild><Link to={build("/")}>{t('404.back')}</Link></Button>
        </section>
    );
}
