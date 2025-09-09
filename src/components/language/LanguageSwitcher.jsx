// components/language/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { useLangPath } from "@/i18n/useLangPath";
import { IconGlobe as Globe, IconCheck as Check } from "@/components/Icons";
import { LANGS } from "@/constants";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const { switchLang } = useLangPath();
    const cur = i18n.language?.startsWith("zh") ? "zh" : "en";

    const change = (lng) => switchLang(lng);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Change language">
                    <Globe className="hidden md:block h-5 w-5" />
                    <span className="block md:hidden text-sm font-medium">Language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[8rem]">
                {LANGS.map(({ code, label }) => (
                    <DropdownMenuItem key={code} onClick={() => change(code)} className="flex items-center justify-between">
                        <span>{label}</span>
                        {cur === code && <Check className="h-4 w-4 opacity-70" />}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}