import { useRef, useEffect } from "react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSegment from "@/components/language/MobileSegment";
import {
    IconDots as Dots,
    IconGithub as Github,
} from "@/components/Icons";
import { cn } from "@/lib/utils";
import { CONTACT_INFO } from "@/constants"

export default function MobileMore({
    open, setOpen, navbarHeight = 56, // navbar 的實際高度（h-14 = 56）
}) {
    const panelRef = useRef(null);

    // 點外面關閉
    useEffect(() => {
        function onDown(e) {
            if (!open) return;
            const target = e.target;
            if (panelRef.current && !panelRef.current.contains(target)){ 
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [open, setOpen]);

    return (
        <>
            {/* 觸發器（放在 Navbar 右側） */}
            <Button
                type="button"
                aria-label="More"
                aria-expanded={open}
                variant="ghost"
                size="icon"
                onClick={() => setOpen(!open)}
                className="md:hidden p-2 rounded-md"
            >
                <Dots className="w-5 h-5" />
            </Button>

            {/* 背板（點擊可關閉） */}
            {open && (
                <div
                    className="fixed inset-0 z-[60] bg-black/20"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* 面板：固定在 Navbar 下方，滿版寬度 */}
            <div
                style={{ top: navbarHeight }}
                className={cn(
                    "fixed left-0 right-0 z-[70] pointer-events-none", // 讓容器不吃事件
                    open ? "translate-y-0 opacity-100" : "opacity-0 -translate-y-4",
                    "border-b shadow-sm",
                    "transition-all duration-200")}
            >
                <div
                    ref={panelRef}
                    className="w-full border-t bg-background/95 backdrop-blur
                        shadow-lg pointer-events-auto"
                >
                    <div className="p-3 space-y-4">
                        {/* Theme */}
                        <div>
                            <span className="text-sm font-medium">Theme</span>
                            <div onClick={() => setOpen(false)}>
                                <ThemeToggle />
                            </div>
                        </div>

                        <div className="h-px bg-border/60" />

                        {/* Language */}
                        <div>
                            <span className="text-sm font-medium">Language</span>
                            <LanguageSegment onPicked={() => setOpen(false)} />
                        </div>

                        <div className="h-px bg-border/60" />

                        {/* GitHub */}
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Github</span>
                            <a
                                href={CONTACT_INFO.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Open GitHub"
                                className="h-11 flex items-center gap-2 px-4 py-2 text-[var(--color-brand-600)]  hover:bg-accent transition"
                                onClick={() => setOpen(false)}
                            >
                                <Github className="w-5 h-5" />
                                <span>Open</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
