import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";

interface StarRatingProps {
  rating: number;
  max?: number;
  className?: string;
}

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex gap-1", className)}
      role="img"
      aria-label={`Рейтинг: ${rating} из ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <Icon
          key={i}
          name="star"
          className={cn(
            "h-4 w-4",
            i < rating
              ? "fill-amber-400 text-amber-400"
              : "text-foreground/15"
          )}
        />
      ))}
    </div>
  );
}
