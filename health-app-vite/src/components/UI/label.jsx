import * as RadixLabel from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }) {
  return (
    <RadixLabel.Root
      className={cn("text-sm font-medium leading-none text-foreground", className)}
      {...props}
    />
  );
}