"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className="h-10 w-[4.5rem] rounded-full bg-foreground/5"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "relative flex h-10 w-[4.5rem] items-center rounded-full border border-card-border p-1 transition-all duration-500 focus-ring",
        isDark
          ? "border-card-border bg-[var(--navy)]"
          : "border-primary/15 bg-primary/8"
      )}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <motion.div
        className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md dark:bg-[#1e293b]"
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        style={{ left: isDark ? "calc(100% - 2.25rem)" : "0.25rem" }}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Icon
            name={isDark ? "moon" : "sun"}
            className={cn(
              "h-4 w-4",
              isDark ? "text-primary" : "text-amber-500"
            )}
          />
        </motion.div>
      </motion.div>
    </button>
  );
}
