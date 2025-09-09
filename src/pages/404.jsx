import { Link } from "react-router-dom";

import { useLangPath } from "@/i18n/useLangPath";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const { build } = useLangPath();
    return (
        <section className="container max-w-4xl py-24 text-center space-y-4">
            <h1 className="text-3xl font-bold">404</h1>
            <p className="opacity-80">這個頁面不存在，或已被移動。</p>
            <Button asChild><Link to={build("/")}>回首頁</Link></Button>
        </section>
    );
}
