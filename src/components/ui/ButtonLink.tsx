import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-foreground text-background hover:bg-foreground/85",
  secondary: "border border-border bg-background text-foreground hover:border-foreground/30",
};

export type ButtonVariant = keyof typeof variants;

export function buttonClass(variant: ButtonVariant, className?: string) {
  return cn(
    "inline-flex h-12 items-center gap-2 rounded-full px-6 text-[15px] font-medium whitespace-nowrap transition-colors [&_svg]:size-4 [&_svg]:shrink-0",
    variants[variant],
    className,
  );
}

type ButtonLinkProps = ComponentProps<"a"> & { variant?: ButtonVariant };

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return <a className={buttonClass(variant, className)} {...props} />;
}
