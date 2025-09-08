import { useEffect, useState, useCallback } from "react";

import { Sun, Moon } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import ButtonSegmented from "@/components/ButtonSegmented";

const STORAGE_KEY = "theme";

function applyTheme(next) {
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        // 與 index.html 的邏輯一致
        const user = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
        if (user) return user;
        const systemDark =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches;
        return systemDark ? "dark" : "light";
    });

    useEffect(() => {
        applyTheme(theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch { }
    }, [theme]);

    const toggle = useCallback(() => {
        setTheme((t) => (t === "dark" ? "light" : "dark"));
    }, []);

    return (
        <>
            {/* Mobile */}
            <ButtonSegmented 
                displayClassname="md:hidden mt-2"  
                value={theme} // "light" | "dark"
                onChange={(v) => { setTheme(v); setOpen(false); }}
                options={[
                    { value: "light", label: "Light", icon: <Sun className="w-5 h-5" /> },
                    { value: "dark",  label: "Dark",  icon: <Moon className="w-5 h-5" /> },
                ]}
            />

            {/* Desktop */}
            <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme" className="hidden md:flex ">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
        </>
    );
}
