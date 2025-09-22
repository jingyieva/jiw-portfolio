import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const ThemeContext = createContext(null);
const STORAGE_KEY = "theme";


function getInitialTheme() {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem(STORAGE_KEY); // "light" | "dark" | null;
    if (saved === "light" || saved === "dark") {
        return saved;
    }

    const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return systemPrefersDark ? "dark" : "light";
}

export function ThemeProvider({ children }) {
    const [theme, setThemeState] = useState(getInitialTheme);

    // 寫入 <html> class 與 localStorage
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch { }
    }, [theme]);

    // 只有「使用者尚未手動選擇」時，才跟隨系統變化
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === "light" || saved === "dark") return;

        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const handle = (e) => setTheme(e.matches ? "dark" : "light");
        mq.addEventListener?.("change", handle);
        return () => mq.removeEventListener?.("change", handle);
    }, []);

    const setTheme = useCallback((t) => setThemeState(t), []);
    const toggleTheme = useCallback(() => setThemeState(t => (t === "dark" ? "light" : "dark")), []);

    const value = useMemo(() => ({
        theme,
        isDark: theme === "dark",
        setTheme,
        toggleTheme,
    }), [theme, setTheme, toggleTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const ctx = useContext(ThemeContext);

    if (!ctx) {
        throw new Error("useTheme must be used within <ThemeProvider>");
    }
    return ctx;
}
