import { cn } from "@/lib/cn";

type CardVariant = "default" | "premium";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  variant?: CardVariant;
}

export function Card({
  children,
  className,
  hover = true,
  glass = true,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[1.25rem] p-6 sm:rounded-[1.5rem] sm:p-7",
        glass && (variant === "premium" ? "glass-card-premium" : "glass-card"),
        hover && "card-hover",
        className
      )}
    >
      {children}
    </div>
  );
}
