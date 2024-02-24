import { cn } from "@/lib/utils";

export default function BoxContent({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={cn(
        "w-96 h-80 border flex justify-center items-center rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
