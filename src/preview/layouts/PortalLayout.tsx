import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { IITBChrome } from "./IITBChrome"
import { PortalHeader } from "./PortalHeader"
import { PortalFooter } from "./PortalFooter"
import { TooltipProvider } from "@/components/ui/tooltip"

const routeTitles: Record<string, string> = {
  "/preview": "Home",
  "/preview/tender-free-view": "Tender Free View",
  "/preview/hot-tenders": "Hot Tenders",
  "/preview/about": "About Us",
  "/preview/contact": "Contact Us",
  "/preview/system-requirements": "System Requirements",
  "/preview/circulars": "Circulars",
  "/preview/nv-access": "NV Access",
  "/preview/details": "Session Details",
  "/preview/login": "Login",
  "/preview/terms-and-conditions": "Terms & Conditions",
  "/preview/disclaimer": "Disclaimer",
  "/preview/glossary": "Glossary",
  "/preview/privacy-policy": "Privacy Policy",
  "/preview/data-privacy-policy": "Data Privacy Policy",
  "/preview/blacklisted-users": "Debarred / Blacklisted Firms",
}

export function PortalLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const pageTitle = routeTitles[pathname]
    if (pageTitle) {
      document.title = `${pageTitle} | G-ERP IIT Bombay`
    } else {
      document.title = "G-ERP IIT Bombay"
    }
  }, [pathname])

  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex min-h-screen flex-col bg-background">
        <IITBChrome />
        <PortalHeader />
        <main id="main-content" className="flex-1">
          <div className="mx-auto max-w-[1440px] px-4 py-6 lg:px-6 lg:py-8">
            <Outlet />
          </div>
        </main>
        <PortalFooter />
      </div>
    </TooltipProvider>
  )
}
