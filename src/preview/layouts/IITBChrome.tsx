import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import { SpeakerHigh, Check, Globe } from "@phosphor-icons/react"

export function IITBChrome() {
  return (
    <>
      {/* Skip-to-content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:shadow-lg"
      >
        Skip to content
      </a>

      <header role="banner" className="w-full bg-primary text-primary-foreground">
        <nav className="mx-auto flex h-10 max-w-[1440px] items-center justify-between px-4 lg:px-6">
          {/* Left: IITB Logo + Institution Name */}
          <div className="flex items-center gap-2 lg:gap-3">
            {/* IITB Logo */}
            <a
              href="https://www.iitb.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-7 items-center justify-center rounded-sm bg-white p-0.5"
            >
              <img
                src="/Curves.svg"
                alt="IIT Bombay"
                className="size-full"
              />
            </a>
            <a
              href="https://www.iitb.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm font-medium transition-opacity hover:opacity-80 sm:inline"
            >
              Indian Institute of Technology Bombay
            </a>
            <a
              href="https://www.iitb.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium transition-opacity hover:opacity-80 sm:hidden"
            >
              IIT Bombay
            </a>
          </div>

          {/* Right: Language selector + NV Access */}
          <div className="flex items-center gap-1">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-1.5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  <Globe className="size-4" />
                  <span className="hidden sm:inline">EN</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Check className="size-4" />
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* NV Access */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  asChild
                >
                  <a
                    href="https://www.nvaccess.org/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SpeakerHigh className="size-4" />
                    <span className="sr-only">NV Access</span>
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>NV Access</TooltipContent>
            </Tooltip>
          </div>
        </nav>
      </header>
    </>
  )
}
