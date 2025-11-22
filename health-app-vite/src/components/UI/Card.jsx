import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Card = forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-border bg-card shadow-sm p-4",
      className
    )}
    {...props}
  />
));

Card.displayName = "Card";

export { Card };