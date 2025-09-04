import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


import { WORK_EXPERIENCES, SKILLS } from '@/constants'

/* ===== 動畫設定 ===== */
const tlContainer = {
    hidden: { opacity: 0 },
    show: (delayBase = 0) => ({
        opacity: 1,
        transition: { delay: delayBase, staggerChildren: 0.08, when: "beforeChildren" },
    }),
};

/* ===== Timeline 容器（帶 whileInView） ===== */
function Timeline({ children, delay = 0 }) {
    return (
        <div
            className="relative border-l-2 border-gray-300/70 dark:border-gray-700/70 ml-3 space-y-8"
        >
            {children}
        </div>
    );
}


function ExperienceItem({ title, company, period, bullets = [] }) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Safari-safe：元件掛載後立刻觸發顯示
        const timer = setTimeout(() => setShow(true), 50);
        return () => clearTimeout(timer);
    }, []);
    return (
        <motion.div
            style={{ willChange: "opacity, transform" }} // 提示 GPU
            initial={{ opacity: 0, y: 8 }}
            animate={show ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative pl-6"
        >
            {/* timeline dot */}
            <span aria-hidden="true" className="absolute grid place-items-center -left-[9px] top-1 w-4 h-4 rounded-full border-2 dark:border-white border-gray-950 bg-[var(--color-brand-600)] shadow-[0_0_0_2px_rgba(255,255,255,1)] dark:shadow-[0_0_0_2px_rgba(10,10,10,1)]">
            </span>
            <div className="grid grid-cols-[1fr_auto] items-start gap-3">
                <h3 className="font-semibold">{company} — {title}</h3>
                <span className="text-xs opacity-70">{period}</span>
            </div>
            {bullets?.length > 0 && (
                <ul className="list-disc list-inside text-sm opacity-90 mt-2 space-y-1">
                    {bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
            )}
        </motion.div>
    );
}

export default function About() {
    return (
        <section className="container max-w-4xl py-12 md:py-20 space-y-12 md:space-y-16">
            {/* Header */}
            <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">About</h2>
                <p className="mt-3 opacity-80">
                    我是 Jing I，專長 React / Tailwind / shadcn/ui 與資料視覺化。<br />
                    近期作品包含：二手交易分析儀表板（Recharts）與 React Gridstack Dashboard。
                </p>
                <div className="mt-5 flex items-center gap-3">
                    <Button asChild>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer">查看履歷（PDF）</a>
                    </Button>
                    <Button variant="secondary" asChild>
                        <Link to="/projects">查看作品集</Link>
                    </Button>
                </div>
            </div>

            {/* Skills */}
            <Card>
                <CardHeader className="pb-2">
                    <h2 className="text-xl font-semibold">Skills</h2>
                </CardHeader>
                <CardContent className="pt-4 pb-4 md:pt-5 md:pb-5 spce-y-6">
                    {/* Work Skills */}
                    <div>
                        <h3 className="text-sm font-medium mb-3 opacity-80">Work Skills（實務應用）</h3>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.work.map((s) => (
                                <Badge key={s} variant="outline" className="brand-outline text-[12px] px-2.5 py-1">
                                    {s}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="h-px bg-gray-200 dark:bg-gray-700 my-4" />
                    {/* Exploration / Side Projects */}
                    <div>
                        <h3 className="text-sm font-medium mb-3 opacity-80">Exploration / Side Projects（研究與自學）</h3>
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.explore.map((s) => (
                                <Badge key={s} variant="outline" className="brand-outline text-[12px] px-2.5 py-1">
                                    {s}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Work Experience */}
            <Card>
                <CardHeader className="pb-2">
                    <h2 className="text-xl font-semibold">Work Experience</h2>
                </CardHeader>
                <CardContent className="pt-4 pb-4 md:pt-5 md:pb-5">
                    <Timeline>
                        {
                            WORK_EXPERIENCES.map(({ title, company, period, content }) => (

                                <ExperienceItem
                                    key={`${company}#${period}`}
                                    title={title}
                                    company={company}
                                    period={period}
                                    bullets={content}
                                />
                            ))
                        }
                    </Timeline>
                </CardContent>
            </Card>
        </section>
    );
}
