/**
 * Sidebar links — sourced verbatim from gerp-content-audit.md (Page 1).
 */

export interface SidebarLink {
  label: string
  href: string
  todo: string
}

export const SIDEBAR_LINKS: SidebarLink[] = [
  {
    label: "Latest circulars/ Formats/ Help Manuals/ FAQs",
    href: "#",
    todo: "// TODO: wire to JS external link handler",
  },
  {
    label: "Debarred/ Blacklisted firms",
    href: "#",
    todo: "// TODO: wire to JS external link handler",
  },
]

/**
 * Footer data — sourced verbatim from gerp-content-audit.md (Page 1, Footer).
 */

export interface FooterLink {
  label: string
  href: string
}

export const SITE_INFO_LINKS: FooterLink[] = [
  { label: "National portal of India", href: "https://www.india.gov.in/" },
  { label: "Digital India", href: "https://www.digitalindia.gov.in/" },
  { label: "General Financial Rules", href: "https://doe.gov.in/whats-new" },
]

export const LEGAL_LINKS: FooterLink[] = [
  { label: "Terms & Conditions", href: "/preview/terms-and-conditions" },
  { label: "Disclaimer", href: "/preview/disclaimer" },
  { label: "Glossary of Terms", href: "/preview/glossary" },
  { label: "Privacy Policy", href: "/preview/privacy-policy" },
  { label: "Data Privacy Policy", href: "/preview/data-privacy-policy" },
]

export const HELP_DESK = {
  phones: ["xxx-xxxxxxxx", "xxx-xxxxxxxx"],
  emails: ["johndoe@example.com", "janedoe@example.com"],
} as const

export const SECURITY_NOTICE =
  "This site uses highly secure 256-bit encryption and is certified by STQC and DigiCert as a secure and trusted site."

export const COPYRIGHT =
  "TW 8.0.53 - © Copyright 2026 Antares Systems Limited. All rights reserved"
