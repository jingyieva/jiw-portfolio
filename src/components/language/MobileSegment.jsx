import { useTranslation } from "react-i18next";

import { useLangPath } from "@/i18n/useLangPath";
import { LANGS } from "@/constants";
import ButtonSegmented from "@/components/ButtonSegmented";

export default function LanguageSegment({ onPicked }) {
    const { i18n } = useTranslation();
    const { switchLang } = useLangPath();
    const cur = i18n.language?.startsWith("zh") ? "zh" : "en";

    const set = (v) => switchLang(v);

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