import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { SignIn, List, CaretDown } from "@phosphor-icons/react"
import { cn } from "@/lib/utils"

/** Override all bg-muted states from navigationMenuTriggerStyle to use a darker shade on the secondary bar */
const darkHoverOverrides = "hover:bg-primary/10 focus:bg-primary/10 data-popup-open:bg-primary/10 data-popup-open:hover:bg-primary/10 data-open:bg-primary/10 data-open:hover:bg-primary/10 data-open:focus:bg-primary/10 data-[active=true]:bg-primary/10 data-[active=true]:hover:bg-primary/15 data-[active=true]:focus:bg-primary/15 active:bg-primary/15"

/** Shared nav link data to avoid duplication between desktop and mobile */
const NAV_LINKS = {
  home: { label: "Home", path: "/preview" },
  tenderView: {
    label: "Tender View",
    children: [
      { label: "Tender Free View", path: "/preview/tender-free-view" },
      { label: "Hot Tenders", path: "/preview/hot-tenders" },
    ],
  },

  contact: { label: "Contact Us", path: "/preview/contact" },
  utilities: {
    label: "Utilities",
    children: [
      {
        label: "System Requirement & Utilities",
        path: "/preview/system-requirements",
      },
      {
        label: "Latest circulars / Formats / Manual / FAQs",
        path: "/preview/circulars",
      },
      {
        label: "Debarred / Blacklisted Firms",
        path: "/preview/blacklisted-users",
      },
    ],
  },
} as const

export function PortalHeader() {
  const location = useLocation()
  const [sheetOpen, setSheetOpen] = useState(false)

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-secondary">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 lg:px-6">
        {/* Left: Portal Title */}
        <Link to="/preview" className="font-heading text-lg font-bold tracking-tight text-primary transition-opacity hover:opacity-80 lg:text-xl">
          G-ERP Portal
        </Link>

        {/* Center: Desktop Navigation Menu (hidden below lg) */}
        <NavigationMenu className="hidden lg:flex" viewport={false}>
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle(), darkHoverOverrides)}
                data-active={location.pathname === "/preview" || undefined}
              >
                <Link to="/preview">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Tender View (dropdown) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={darkHoverOverrides}>Tender View</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-48 flex-col">
                  {NAV_LINKS.tenderView.children.map((child) => (
                    <NavigationMenuLink key={child.path} asChild>
                      <Link
                        to={child.path}
                        className={cn(
                          "block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted"
                        )}
                      >
                        {child.label}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Utilities (dropdown) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={darkHoverOverrides}>Utilities</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex w-72 flex-col">
                  {NAV_LINKS.utilities.children.map((child) => (
                    <NavigationMenuLink key={child.path} asChild>
                      <Link
                        to={child.path}
                        className={cn(
                          "block rounded-sm px-3 py-2 text-sm transition-colors hover:bg-muted"
                        )}
                      >
                        {child.label}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Contact Us */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle(), darkHoverOverrides)}
                data-active={
                  location.pathname === "/preview/contact" || undefined
                }
              >
                <Link to="/preview/contact">Contact Us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" asChild className="hidden sm:inline-flex">
            <Link to="/preview/login">
              <SignIn className="size-4" />
              Log in
            </Link>
          </Button>

          {/* Mobile: Hamburger menu (visible below lg) */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="lg:hidden">
                <List className="size-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetHeader className="border-b px-4 py-3">
                <SheetTitle className="text-base">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 p-3">
                {/* Home */}
                <Link
                  to="/preview"
                  onClick={() => setSheetOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 active:bg-primary/15",
                    location.pathname === "/preview" && "bg-primary/10"
                  )}
                >
                  Home
                </Link>

                {/* Tender View (collapsible) */}
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 active:bg-primary/15">
                    Tender View
                    <CaretDown className="size-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-3 flex flex-col gap-1 border-l pl-3">
                      {NAV_LINKS.tenderView.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setSheetOpen(false)}
                          className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground active:bg-primary/15"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Utilities (collapsible) */}
                <Collapsible>
                  <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 active:bg-primary/15">
                    Utilities
                    <CaretDown className="size-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="ml-3 flex flex-col gap-1 border-l pl-3">
                      {NAV_LINKS.utilities.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setSheetOpen(false)}
                          className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground active:bg-primary/15"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                {/* Contact Us */}
                <Link
                  to="/preview/contact"
                  onClick={() => setSheetOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-primary/10 active:bg-primary/15",
                    location.pathname === "/preview/contact" && "bg-primary/10"
                  )}
                >
                  Contact Us
                </Link>

                {/* Mobile: Login */}
                <div className="mt-2 border-t pt-3">
                  <Button variant="default" size="sm" className="w-full sm:hidden" asChild>
                    <Link to="/preview/login" onClick={() => setSheetOpen(false)}>
                      <SignIn className="size-4" />
                      Log in
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
