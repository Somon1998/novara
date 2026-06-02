import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "btn-shine bg-gradient-to-r from-accent-teal via-primary to-primary-dark text-white shadow-[0_4px_20px_rgba(53,187,245,0.35)] hover:shadow-[0_8px_32px_rgba(53,187,245,0.45)] hover:brightness-105 active:scale-[0.97] dark:bg-primary dark:from-primary dark:via-primary dark:to-primary dark:text-[var(--primary-foreground)] dark:shadow-[0_4px_20px_rgba(59,196,255,0.28)] dark:hover:shadow-[0_8px_32px_rgba(59,196,255,0.38)] dark:hover:brightness-100",
  secondary:
    "bg-navy text-white shadow-[0_4px_16px_rgba(12,45,72,0.25)] hover:shadow-[0_8px_24px_rgba(12,45,72,0.35)] hover:brightness-110 active:scale-[0.97] dark:bg-[var(--navy)] dark:hover:brightness-105",
  outline:
    "border border-primary/25 bg-background/40 text-primary backdrop-blur-sm hover:border-primary/50 hover:bg-primary/8 active:scale-[0.97] dark:border-transparent dark:bg-[var(--navy)] dark:text-white dark:hover:bg-[#2d3748] dark:hover:border-transparent",
  ghost:
    "text-foreground hover:bg-foreground/6 active:scale-[0.97]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2.5 text-sm rounded-xl gap-1.5",
  md: "px-6 py-3 text-sm rounded-2xl gap-2",
  lg: "px-8 py-4 text-[0.9375rem] rounded-full gap-2.5 tracking-wide",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className,
  onClick,
  disabled,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-ring disabled:opacity-50 disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
