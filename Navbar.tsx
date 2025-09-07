import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

type NavbarProps = ComponentProps<'nav'>

export function Navbar({ className, children, ...props }: NavbarProps) {
  return (
    <nav className={cn("flex items-center justify-between px-4", className)} {...props}>
      <div className="text-2xl font-bold font-display">Eimy</div>
      <div>{children}</div>
    </nav>
  )
}