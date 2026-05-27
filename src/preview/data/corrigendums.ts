/**
 * Corrigendum data — sourced verbatim from gerp-content-audit.md (Page 1).
 * Structured as a typed array so a future API integration is obvious.
 */

export interface Corrigendum {
  tender: string
  corrigendumDescription: string
  documentRequestDateTime: string
  closingDateTime: string
}

export const LATEST_CORRIGENDUMS: Corrigendum[] = [
  {
    tender: "Single Tender / Proprietary flow test 21-05-2026 user233",
    corrigendumDescription:
      "Single Tender / Proprietary flow test 21-05-2026 user233",
    documentRequestDateTime: "May 26, 2026 7:00:00 PM",
    closingDateTime: "May 26, 2026 7:00:00 PM",
  },
]
