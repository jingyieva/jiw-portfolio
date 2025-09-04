import { Link, NavLink } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { IconGithub as Github, IconHome as Home, IconUser as User, IconWork as Work } from "@/components/Icons";

import { CONTACT_INFO } from "@/constants"
import ThemeToggle from '@/components/ThemeToggle';


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
    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800">
            <div className="container h-14 flex items-center justify-between">
                <Link aria-label="Home" to="/" className="hidden md:block font-semibold tracking-tight">Jing I Wu</Link>
                <Link aria-label="Home" to="/" className="block md:hidden font-bold text-lg">
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
                <nav className="flex items-center gap-4 text-sm">
                    <NavItem to="/" label="Home" icon={Home} end />
                    <NavItem to="/about" label="About" icon={User} />
                    <NavItem to="/projects" label="Projects" icon={Work} />

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    <Button variant="ghost" asChild size="icon" aria-label="GitHub">
                        <a href={CONTACT_INFO.github} target="_blank" rel="noreferrer">
                            <Github className="w-5 h-5" />
                        </a>
                    </Button>
                </nav>
            </div>
        </header>
    )
}
