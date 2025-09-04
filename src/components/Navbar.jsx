import { Link, NavLink } from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { IconGithub as Github } from "@/components/Icons";

import { CONTACT_INFO } from "@/constants"
import ThemeToggle from '@/components/ThemeToggle';


function NavItem({ to, label, end = false }) {
    return (
        <NavLink
            to={to}
            end={end}
            className={({ isActive }) =>
                `text-sm px-2 py-1 transition ${isActive ? "nav-link-active" : ""} nav-link`
            }
        >
            {label}
        </NavLink>
    );
}

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200 dark:border-gray-800">
            <div className="container h-14 flex items-center justify-between">
                <Link to="/" className="font-semibold tracking-tight">Jing I Wu</Link>
                <nav className="flex items-center gap-4 text-sm">
                    <NavItem to="/" label="Home" end />
                    <NavItem to="/about" label="About" />  
                    <NavItem to="/projects" label="Projects" />

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
