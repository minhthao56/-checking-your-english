import { cn } from "@/lib/utils"

export function H3({children, className ,...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <h3 className={cn("scroll-m-20 text-2xl font-semibold tracking-tight", className)} {...props}>
      {children}
    </h3>
  );
}
