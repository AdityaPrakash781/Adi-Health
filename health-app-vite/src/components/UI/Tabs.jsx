// src/components/UI/Tabs.jsx
import * as RadixTabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export function Tabs({ value, onValueChange, children, className }) {
  return (
    <RadixTabs.Root
      value={value}
      onValueChange={onValueChange}
      className={cn("space-y-3", className)}
    >
      {children}
    </RadixTabs.Root>
  );
}

export function TabsList({ className, ...props }) {
  return (
    <RadixTabs.List
      className={cn(
        "flex gap-2 p-1 bg-gray-100 rounded-lg",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({ className, ...props }) {
  return (
    <RadixTabs.Trigger
      className={cn(
        "px-4 py-2 text-sm rounded-md data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-gray-200",
        className
      )}
      {...props}
    />
  );
}

export function TabsContent({ className, ...props }) {
  return (
    <RadixTabs.Content className={cn(className)} {...props} />
  );
}
