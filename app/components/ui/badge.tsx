import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-4 py-1 text-xs font-medium leading-normal transition-colors outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 backdrop-blur-lg bg-opacity-30",
  {
    variants: {
      variant: {
        default:
          "border border-white/20 bg-white/10 text-primary-foreground shadow-md text-slate-100",
        secondary:
          "border border-white/20 bg-gray-300/10 text-secondary-foreground shadow-md",
        destructive:
          "border border-red-400/30 bg-red-500/10 text-destructive-foreground shadow-md",
        outline:
          "border border-white/30 bg-transparent text-foreground shadow-md",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
