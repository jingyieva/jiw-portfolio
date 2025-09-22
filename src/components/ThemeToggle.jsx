// src/components/ThemeToggle.jsx

import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import ButtonSegmented from "@/components/ButtonSegmented";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle({ onClose }) {
    const { theme, setTheme, toggleTheme } = useTheme();

    return (
        <>
            {/* Mobile */}
            <ButtonSegmented
                displayClassname="md:hidden mt-2"
                value={theme} // "light" | "dark"
                onChange={(v) => { setTheme(v); onClose?.(); }}
                options={[
                    { value: "light", label: "Light", icon: <Sun className="w-5 h-5" /> },
                    { value: "dark", label: "Dark", icon: <Moon className="w-5 h-5" /> },
                ]}
            />

            {/* Desktop */}
            <Button variant="ghost" size="icon" 
                onClick={() => {
                    toggleTheme();
                    onClose?.();
                }} aria-label="Toggle theme" className="hidden md:flex ">
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
        </>
    );
}
