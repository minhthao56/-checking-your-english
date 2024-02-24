import Link from "next/link";
import { LetterCaseCapitalizeIcon} from "@radix-ui/react-icons"

import { ModeToggle } from "./mode-toggle";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className="flex h-16 px-4 justify-center border-b" {...props}>
      <div className="flex max-w-screen-xl w-full items-center justify-between">
        <div className="border p-2 rounded-full">
         <LetterCaseCapitalizeIcon/>
        </div>
        <div className="flex">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary mr-4"
          >
            Home
          </Link>
          <Link
            href="/reflex"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Reflex
          </Link>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
