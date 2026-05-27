import { Link } from "react-router-dom"
import {
  SITE_INFO_LINKS,
  LEGAL_LINKS,
  HELP_DESK,
  SECURITY_NOTICE,
  COPYRIGHT,
} from "@/preview/data/links"
import { Separator } from "@/components/ui/separator"

export function PortalFooter() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-6 lg:py-10">
        {/* Footer Grid — 1-col on mobile, 2-col on sm, 5-col (with divider) on lg */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_auto_1fr_1fr_1fr]">
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <Link to="/preview" className="font-heading text-base font-medium transition-opacity hover:opacity-80">
              GERP eProcurement Portal
            </Link>
            <p className="text-xs opacity-70">{SECURITY_NOTICE}</p>
          </div>

          {/* Vertical Divider — only visible on lg */}
          <Separator
            orientation="vertical"
            className="hidden bg-primary-foreground/20 lg:block"
          />

          {/* Column 2: Site Information */}
          <div>
            <h3 className="mb-3 text-sm font-medium">Site Information</h3>
            <div className="flex flex-col gap-2">
              {SITE_INFO_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="mb-3 text-sm font-medium">Legal</h3>
            <div className="flex flex-col gap-2">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm underline underline-offset-4 opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Help Desk */}
          <div>
            <h3 className="mb-3 text-sm font-medium">Help Desk</h3>
            <div className="flex flex-col gap-3 text-sm opacity-70">
              <div>
                <span className="font-medium opacity-100">Contact No :</span>
                <div className="mt-1 flex flex-col gap-0.5">
                  {HELP_DESK.phones.map((phone) => (
                    <span key={phone}>{phone}</span>
                  ))}
                </div>
              </div>
              <div>
                <span className="font-medium opacity-100">E-mail :</span>
                <div className="mt-1 flex flex-col gap-0.5">
                  {HELP_DESK.emails.map((email) => (
                    <span key={email}>{email}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-xs opacity-50">{COPYRIGHT}</p>
        </div>
      </div>
    </footer>
  )
}
