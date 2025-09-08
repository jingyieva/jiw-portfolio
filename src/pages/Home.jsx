import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'
import { FaGithub as Github } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { CONTACT_INFO } from "@/constants"
import RecentUpdates from "@/components/RecentUpdates";

export default function Home() {
    const [t] = useTranslation();
    return (
        <section className="container py-12 md:py-20">
            <div className="flex flex-col-reverse md:flex-row md:items-center gap-8">
                <div className="md:flex-2 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight mb-3"
                    >
                        {t('hero.title')}
                    </motion.h1>
                    <p className="opacity-80 mb-6">
                        {t('hero.desc.1')}<br />{t('hero.desc.2')}
                    </p>
                    <div className="flex items-center flex-wrap justify-center md:justify-start gap-3">
                        <Button asChild>
                            <Link to="/projects">{t('cta.projects')}</Link>
                        </Button>
                        <Button variant="secondary" asChild>
                            <Link to="/about">{t('cta.about')}</Link>
                        </Button>

                        <Button variant="ghost" asChild className="gap-2">
                            <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer">
                                <Github className="w-4 h-4" />
                                {t('cta.github')}
                            </a>
                        </Button>
                    </div>
                </div>
                <div className="md:flex-1 flex md:justify-end justify-center">
                    <img 
                        src="/avatar.webp" alt="Avatar" 
                        width="160" height="160"
                        loading="lazy" decoding="async"
                        className="size-32 md:size-40 rounded-full border border-gray-200 dark:border-gray-800 object-cover" />
                </div>
            </div>

            <section aria-labelledby="highlights-heading" className="mt-14 grid md:grid-cols-3 gap-6 items-stretch auto-rows-fr">
                <h2 id="highlights-heading" className="sr-only">{t('home.highlights.heading')}</h2>
                <article aria-labelledby="work-highlight-heading" className="h-full">
                    <Card className="h-full flex flex-col">
                        <CardHeader className="pb-2">
                            <h3 id="work-highlight-heading" className="font-semibold">{t('home.highlights')}</h3>
                        </CardHeader>
                        <CardContent className="pt-0 flex-1">
                            <ul className="list-disc list-inside text-sm opacity-80 space-y-1">
                                {
                                    t('home.highlights.items', { returnObjects: true })?.map((item, i) => (
                                        <li key={`highlight-item-${i}`}>{item}</li>
                                    ))
                                }
                            </ul>
                        </CardContent>
                    </Card>
                </article>
                <article aria-labelledby="skill-heading" className="h-full">
                    <Card className="h-full flex flex-col">
                        <CardHeader className="pb-2">
                            <h3 id="skill-heading"className="font-semibold">{t('home.skills')}</h3>
                        </CardHeader>
                        <CardContent className="pt-0 flex-1">
                            <p className="text-sm opacity-80">
                                {t('home.skills.desc')}
                            </p>
                        </CardContent>
                    </Card>
                </article>
                <article aria-labelledby="contact-heading" className="h-full">
                    <Card className="h-full flex flex-col">
                        <CardHeader className="pb-2">
                            <h3 id="contact-heading" className="font-semibold">{t('home.contact')}</h3>
                        </CardHeader>
                        <CardContent className="pt-0 flex-1">
                            <ul className="text-sm opacity-80 list-disc list-inside space-y-1">
                                <li>{t('home.contact.email', { email: CONTACT_INFO.email })}</li>
                                <li>{t('home.contact.linkedin', { url: CONTACT_INFO.linkedIn })}</li>
                            </ul>
                        </CardContent>
                    </Card>
                </article>
            </section>
            <RecentUpdates limit={4} />
        </section>
    )
}
