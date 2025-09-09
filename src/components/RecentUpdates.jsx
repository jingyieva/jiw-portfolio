import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useLangPath } from "@/i18n/useLangPath";
import UpdateCard from "@/components/UpdateCard";
import data from "@/datas/updates.json";

export default function RecentUpdates({ limit = 4 }) {
    const [t] = useTranslation();
    const { build } = useLangPath();
    const items = [...data].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
    
    return (
        <section className="my-10" aria-labelledby="recent-updates-heading">
            <div className="flex items-baseline justify-between mb-4">
                <h2 id="recent-updates-heading" className="text-xl md:text-2xl font-semibold">{t('home.recentUpdate')}</h2>
                <Link to={build("/updates")} className="text-sm underline underline-offset-4 hover:opacity-80">{t('home.recentUpdate.all')}</Link>
            </div>
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {items.map((it) => <UpdateCard key={it.id} item={it} />)}
            </div>
        </section>
    );
}
