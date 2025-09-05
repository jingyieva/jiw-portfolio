import { Badge } from "@/components/ui/badge"; // 若沒有就用你現有的 Badge
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

export default function UpdateCard({ item }) {
    const dateFmt = new Date(item.date).toLocaleDateString("zh-TW", { timeZone: "Asia/Taipei" });
    return (
        <Card className="rounded-2xl h-full flex flex-col 
            transition 
            hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/30 hover:bg-accent/5
            dark:hover:shadow-black/50 dark:hover:border-primary/40
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40
            ">
            <CardHeader className="space-y-1">
                <time dateTime={item.date} className="text-sm text-muted-foreground">{dateFmt}</time>
                <CardTitle className="text-base md:text-lg font-semibold leading-snug tracking-tight line-clamp-2">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-6 flex-1 flex flex-col gap-3">
                <p className="text-muted-foreground line-clamp-2">{item.summary}</p>
                {item.tags?.length ? (
                    <div className="mt-3 flex flex-wrap gap-2 item-center">
                        {item.tags.map((t) => (
                            <Badge key={t} variant="secondary" className="capitalize">{t}</Badge>
                        ))}
                    </div>
                ) : null}
            </CardContent>
            {item.links?.length ? (
                <CardFooter className="flex flex-wrap gap-3 mt-auto pt-0">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 items-center">
                        {item.links.map((l) => (
                            <a 
                                key={l.url} 
                                href={l.url} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-sm underline underline-offset-4 hover:opacity-80">
                                {l.label}
                            </a>
                        ))}
                    </div>
                </CardFooter>
            ) : null}
        </Card>
    );
}
