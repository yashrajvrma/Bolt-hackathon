import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva("w-full relative", {
  variants: {
    variant: {
      plus: [
        "border border-dashed",
        "border-zinc-800 dark:border-zinc-800",
        "relative",
        "bg-transparent",
      ],
    },
  },
  defaultVariants: {
    variant: "plus",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  title?: string;
  amount?: string;
}

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("px-12 py-4 text-center", className)} {...props}>
    {props.children}
  </div>
));
CardContent.displayName = "CardContent";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, amount, children, ...props }, ref) => {
    const PlusIcons = () => (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1"
          stroke="currentColor"
          className="text-zinc-600 size-6 absolute -top-3 -left-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1"
          stroke="currentColor"
          className="text-zinc-600 size-6 absolute -top-3 -right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1"
          stroke="currentColor"
          className="text-zinc-600 size-6 absolute -bottom-3 -left-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          strokeWidth="1"
          stroke="currentColor"
          className="text-zinc-600 size-6 absolute -bottom-3 -right-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </>
    );

    const content = (
      <CardContent>
        {title && (
          <h3 className="sm:text-3xl text-2xl font-medium mb-2 text-neutral-400">
            {title}
          </h3>
        )}
        {amount && (
          <p className="sm:text-7xl text-4xl font-medium text-neutral-300 tracking-tighter">
            {amount}
          </p>
        )}
        {children}
      </CardContent>
    );

    return (
      <div ref={ref} className={cn(cardVariants({ className }))} {...props}>
        <PlusIcons />
        {content}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card, CardContent, cardVariants };
