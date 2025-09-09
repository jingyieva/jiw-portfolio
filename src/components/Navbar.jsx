import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { IconGithub as Github, IconHome as Home, IconUser as User, IconWork as Work } from "@/components/Icons";

import { useLangPath } from "@/i18n/useLangPath";
import { CONTACT_INFO } from "@/constants"
import MobileMore from "@/components/MobileMore";
import ThemeToggle from '@/components/ThemeToggle';
import LanguageSwitcher from "@/components/language/LanguageSwitcher";

function NavItem({ to, label, end = false, icon }) {
    const Icon = icon || null;
    return (
        <>
            <NavLink
                to={to}
                end={end}
                className={({ isActive }) =>
                    `hidden md:inline-block px-2 py-1 rounded-md transition ${isActive ? "text-[var(--color-brand-600)] font-medium" : "opacity-80"}`
                }
            >
                {label}
            </NavLink>
            {
                Icon ? (
                    <NavLink
                        to={to}
                        end={end}
                        className={({ isActive }) =>
                            `md:hidden p-2 transition ${isActive ? "text-[var(--color-brand-600)]" : "opacity-80"}`
                        }
                    >
                        <Icon className="w-5 h-5" />
                    </NavLink>
                ) : null
            }
        </>
    );
}

export default function Navbar() {
    const [t] = useTranslation();
    const [moreOpen, setMoreOpen] = useState(false);
    const { build } = useLangPath();

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800">
            <div className="container h-14 flex items-center justify-between">
                <Link aria-label="Home" to={build("/")} className="hidden md:block font-semibold tracking-tight">{t('nav.header')}</Link>
                <Link aria-label="Home" to={build("/")} className="block md:hidden font-bold text-lg">
                    <img
                        src="/apple-touch-icon.png"
                        alt="JIW"
                        width="24"
                        height="24"
                        className="w-6 h-6"
                        loading="eager"
                        decoding="async"
                    />
                </Link>

                <nav className="flex items-center gap-1 md:gap-2 text-sm">
                    <NavItem to={build("/")} label={t('nav.home')} icon={Home} end />
                    <NavItem to={build("about")} label={t('nav.about')} icon={User} />
                    <NavItem to={build("projects")} label={t('nav.projects')} icon={Work} />
                    
                    <MobileMore open={moreOpen} setOpen={setMoreOpen} navbarHeight={56} />

                    <div className="hidden md:flex items-center gap-2">
                        {/* Theme Toggle */}
                        <ThemeToggle />
                        {/* Language Switcher */}
                        <LanguageSwitcher />
                        {/* Github */}
                        <Button variant="ghost" asChild size="icon" aria-label="GitHub">
                            <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer">
                                <Github className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
