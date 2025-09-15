import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function ProjectCard({ title, description, tags = [], demo, repo, status }) {

    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        // Safari 相容關鍵：提早觸發、寬鬆判定
        margin: "-15% 0px -10% 0px",
    });

    return (
        <motion.article
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4 }}
            style={{ willChange: "opacity, transform" }}
            className="h-full" 
        >
            <Card className="group h-full flex flex-col">
                <CardHeader className="pb-2 flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
                    {status === "archived" && (
                        <span className="text-xs rounded-full px-2 py-1 border opacity-70">Archived</span>
                    )}
                </CardHeader>

                <CardContent className="pt-0 flex-1">
                    <p className="text-sm opacity-80 mb-3">{description}</p>

                    {!!tags.length && (
                        <div className="flex flex-wrap gap-2 mb-1">
                            {tags.map((t) => (
                                <Badge key={t} variant="secondary">{t}</Badge>
                            ))}
                        </div>
                    )}
                </CardContent>

                {(demo || repo) && (
                    <CardFooter className="pt-0 mt-auto">
                        <div className="flex items-center gap-2 min-h-10">
                            {demo && (
                                <Button asChild className="gap-2">
                                    <a href={demo} target="_blank" rel="noreferrer">
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                            {repo && (
                                <Button variant="ghost" asChild className="gap-2">
                                    <a href={repo} target="_blank" rel="noreferrer">
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </Button>
                            )}
                        </div>
                    </CardFooter>
                )}
            </Card>
        </motion.article>
    )
}
