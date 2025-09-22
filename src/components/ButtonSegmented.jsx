
import { cn } from "@/lib/utils";

export default function Segmented({ value, onChange, options, displayClassname = "" }) {
    return (
        <div 
            role="group" 
            className={cn(
                displayClassname,   
                "grid grid-cols-2 gap-2"
            )}
        >
            {options.map(opt => {
                const active = opt.value === value;
                return (
                    <button
                        key={opt.value}
                        type="button"
                        aria-pressed={active}
                        aria-label={opt.label}
                        onClick={() => onChange(opt.value)}
                        className={cn(
                            "h-11 rounded-2xl border text-sm font-medium transition",
                            "flex items-center justify-center gap-2",
                            active
                                ? "bg-[var(--color-brand-600)] text-white border-transparent"
                                : "bg-background/70 hover:bg-accent hover:text-accent-foreground"
                    )}
                    >
                        {opt.icon}{opt.label}
                    </button>
                );
            })}
        </div>
    );
}
