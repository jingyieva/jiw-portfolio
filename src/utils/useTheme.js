// src/utils/useTheme.ts
import { useEffect, useMemo, useState, useCallback } from "react";

const STORAGE_KEY = "theme"; // "light" | "dark"

function getInitialTheme() {
    if (typeof window === "undefined") return "light";
    const saved = localStorage.getItem(STORAGE_KEY); // "light" | "dark" | null;
    if (saved === "light" || saved === "dark") { 
        return saved;
    }

    const systemPrefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    return systemPrefersDark ? "dark" : "light";
}

export function useTheme() {
    const [theme, setTheme] = useState(getInitialTheme);

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

    // 跨分頁同步（使用者在另一分頁切換主題）
    useEffect(() => {
        const onStorage = (e) => {
            if (e.key === STORAGE_KEY && (e.newValue === "light" || e.newValue === "dark")) {
                setTheme(e.newValue);
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    const toggleTheme = useCallback(
        () => setTheme((t) => (t === "dark" ? "light" : "dark")),
        []
    );

    return useMemo(
        () => ({ theme, setTheme, toggleTheme, isDark: theme === "dark" }),
        [theme, toggleTheme]
    );
}
