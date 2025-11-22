// src/components/UI/Textarea.jsx
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Textarea = forwardRef(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full min-h-[100px] rounded-lg border border-input bg-white px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary",
      className
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";

export { Textarea };
