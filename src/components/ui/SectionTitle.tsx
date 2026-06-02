import { cn } from "@/lib/cn";

interface SectionTitleProps {
  badge?: string;
  title: string;
  /** Последнее слово с градиентом, например «врачи» в «Наши врачи» */
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionTitleProps) {
  const isCentered = align === "center";
  const prefix =
    highlight && title.endsWith(highlight)
      ? title.slice(0, title.length - highlight.length).trimEnd()
      : null;

  return (
    <div
      className={cn(
        "mb-14 w-full sm:mb-16 lg:mb-20",
        isCentered ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className
      )}
      data-reveal
    >
      {badge && (
        <div className={cn(isCentered && "flex justify-center")}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/6 px-4 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary">
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden="true" />
            {badge}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "text-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight",
          isCentered && "text-center"
        )}
      >
        {prefix && highlight ? (
          <>
            <span className="text-foreground dark:text-white">{prefix} </span>
            <span className="text-primary">{highlight}</span>
          </>
        ) : (
          <span className="text-foreground dark:text-white">{title}</span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-[1.7] text-foreground/80 dark:text-white/80 sm:text-lg sm:leading-[1.75]",
            isCentered && "mx-auto max-w-2xl text-center"
          )}
        >
          {subtitle}
        </p>
      )}

      {isCentered && (
        <div
          className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
