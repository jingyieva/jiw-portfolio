import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { SKILLS } from '@/constants'
import { WORK_EXPERIENCES } from '@/datas/experiences'



function ExperienceItem({ companyId }) {
    const [show, setShow] = useState(false);
    const [t, i18n] = useTranslation(['about']);

    const fmt = new Intl.DateTimeFormat(
        i18n.language.startsWith("zh") ? "zh-TW" : "en-US",
        { year: "numeric", month: "short" }
    );
    
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
            <span
                aria-hidden="true"
                className="absolute grid place-items-center -left-[9px] top-1 w-4 h-4 rounded-full border-2 dark:border-white border-gray-950 bg-[var(--color-brand-600)] shadow-[0_0_0_2px_rgba(255,255,255,1)] dark:shadow-[0_0_0_2px_rgba(10,10,10,1)]">
            </span>
            <div className="md:grid md:grid-cols-[1fr_auto] md:items-start md:gap-3">
                <h3 className="font-semibold text-base md:text-lg leading-snug">
                    {t(`about:work.${companyId}.company`)}
                </h3>
                
                <span 
                    className="inline-flex md:block
                        text-xs md:text-xs
                        mt-2 md:mt-0
                        rounded-full md:rounded-none
                        px-2 py-0.5 md:px-0 md:py-0
                        bg-gray-200/70 dark:bg-gray-700/60 md:bg-transparent
                        text-gray-700 dark:text-gray-200 md:opacity-70
                        md:self-start"
                >
                    <time dateTime={t(`about:work.${companyId}.start`)}>
                        {fmt.format(new Date(t(`about:work.${companyId}.start`)))}
                    </time>
                    <span aria-hidden="true" className="mx-1">–</span>
                    <time dateTime={t(`about:work.${companyId}.end`)}>
                        {fmt.format(new Date(t(`about:work.${companyId}.end`)))}
                    </time>
                </span>
            </div>
            <h4 className="mt-1 text-sm md:text-base font-medium">{t(`about:work.${companyId}.title`)}</h4>
            {t(`about:work.${companyId}.bullets`, { returnObjects: true })?.length > 0 ? (
                <ul className="list-disc list-inside text-sm opacity-90 mt-2 space-y-1">
                    {t(`about:work.${companyId}.bullets`, 
                        { returnObjects: true }).map((b, i) => (
                            <li key={`${companyId}-bullet-${i}`}>{b}</li>
                        )
                    )}
                </ul>) : null
            }
        </motion.div>
    );  
}

export default function About() {
    const [t] = useTranslation(['common', 'about']);
    return (
        <section className="container max-w-4xl py-12 md:py-20 space-y-12 md:space-y-16">
            {/* Header */}
            <div className="max-w-3xl">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('about:title')}</h2>
                <p className="mt-3 opacity-80">
                    {t('common:about.desc.1')}<br />
                    {t('common:about.desc.2')}
                </p>
                <div className="mt-5 flex items-center gap-3">
                    <Button asChild>
                        <a href="/resume.pdf" target="_blank" rel="noreferrer">{t('common:cta.resume')}</a>
                    </Button>
                    <Button variant="secondary" asChild>
                        <Link to="/projects">{t('common:cta.projects')}</Link>
                    </Button>
                </div>
            </div>

            {/* Skills */}
            <Card>
                <CardHeader className="pb-2">
                    <h2 className="text-xl font-semibold">{t('common:about.skills')}</h2>
                </CardHeader>
                <CardContent className="pt-4 pb-4 md:pt-5 md:pb-5 space-y-6">
                    {/* Work Skills */}
                    <div>
                        <h3 className="text-sm font-medium mb-3 opacity-80">{t('common:about.skills.work')}</h3>
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
                        <h3 className="text-sm font-medium mb-3 opacity-80">{t('common:about.skills.self')}</h3>
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
                    <h2 className="text-xl font-semibold">{t('common:about.work')}</h2>
                </CardHeader>
                <CardContent className="pt-4 pb-4 md:pt-5 md:pb-5">
                    <div
                        className="relative border-l-2 border-gray-300/70 dark:border-gray-700/70 ml-3 space-y-8"
                    >
                        {
                            WORK_EXPERIENCES.map(({ id }) => (

                                <ExperienceItem
                                    key={`${id}`}
                                    companyId={id}
                                />
                            ))
                        }
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
