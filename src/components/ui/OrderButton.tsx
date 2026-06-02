"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { OrderModal } from "@/components/ui/OrderModal";
import { useLocale } from "@/components/providers/LocaleProvider";
import { cn } from "@/utils/cn";

interface OrderButtonProps {
  productName?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function OrderButton({
  productName,
  children,
  variant = "primary",
  size = "md",
  className,
}: OrderButtonProps) {
  const { t } = useLocale();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={cn(className)}
        onClick={() => setOpen(true)}
      >
        {children ?? t.order.button}
      </Button>
      <OrderModal
        isOpen={open}
        onClose={() => setOpen(false)}
        productName={productName}
      />
    </>
  );
}
