import * as RadixSeparator from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

export function Separator({ className, orientation = "horizontal", ...props }) {
  return (
    <RadixSeparator.Root
      orientation={orientation}
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...props}
    />
  );
}