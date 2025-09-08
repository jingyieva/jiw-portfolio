import { useTranslation } from "react-i18next";

import { LANGS } from "@/constants";
import ButtonSegmented from "@/components/ButtonSegmented";

export default function LanguageSegment({ onPicked }) {
    const { i18n } = useTranslation();
    const cur = i18n.language?.startsWith("zh") ? "zh" : "en";
    const set = (v) => {
        i18n.changeLanguage(v);
        document.documentElement.lang = v === "zh" ? "zh-TW" : "en";
        localStorage.setItem("i18n-lang", cur);
        onPicked?.();
    };

    return (
        <ButtonSegmented
            displayClassname="md:hidden mt-2"
            value={cur} // "zh" | "en"
            onChange={set}
            options={LANGS.map(({ code, label }) => (
                { value: code, label }
            ))}

        />
    );
}