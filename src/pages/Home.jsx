import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub as Github } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { CONTACT_INFO } from "@/constants"

export default function Home() {
    return (
        <section className="container py-12 md:py-20">
            <div className="grid md:grid-cols-3 gap-10 items-center">
                <div className="md:col-span-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                    >
                        Hi, I’m Jing I — Frontend Engineer
                    </motion.h1>
                    <p className="opacity-80 mb-6">
                        專長 React / Tailwind / Data Viz。<br />近期重點：
                        二手交易分析儀表板（Recharts）與 React Gridstack Dashboard。
                    </p>
                    <div className="flex items-center gap-3">
                        <Button asChild>
                            <Link to="/projects">查看作品集</Link>
                        </Button>
                        <Button variant="secondary" asChild>
                            <Link to="/about">關於我</Link>
                        </Button>

                        <Button variant="ghost" asChild className="gap-2">
                            <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer">
                                <Github className="w-4 h-4" />
                                GitHub
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img 
                        src="/avatar.jpg" alt="Avatar" 
                        width="160" height="160"
                        loading="lazy" decoding="async"
                        className="size-32 md:size-40 rounded-full border border-gray-200 dark:border-gray-800 object-cover" />
                </div>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="pb-2">
                        <h3 className="font-semibold">工作經歷 Highlights</h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
                            <li>前端工程｜React、Tailwind、shadcn/ui</li>
                            <li>資料視覺化｜Chart.js / Recharts 儀表板</li>
                            <li>自動化佈署｜semantic-release + GitHub Actions</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <h3 className="font-semibold">技術專長</h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <p className="text-sm opacity-80">
                            React／Tailwind／Jest／Vite<br/>熟悉設計到落地的快速迭代流程
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <h3 className="font-semibold">聯絡方式</h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <ul className="text-sm opacity-80 list-disc list-inside space-y-1">
                            <li>{`Email：${CONTACT_INFO.email}`}</li>
                            <li>{`LinkedIn：${CONTACT_INFO.linkedIn}`}</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
