/**
 * Tender data — sourced verbatim from gerp-content-audit.md (Page 1).
 * Structured as a typed array so a future API integration is obvious.
 */

export interface Tender {
  tender: string
  descriptionOfWork: string
  divisionDepartment: string
  closingDateTime: string
}

export const LATEST_TENDERS: Tender[] = [
  {
    tender: "Manual Tender with out participation option",
    descriptionOfWork: "Manual Tender with out participation option",
    divisionDepartment: "IITBOMBAY-UAT",
    closingDateTime: "May 26, 2027 3:00:00 PM",
  },
  {
    tender: "Single Tender / Proprietary flow test 21-05-2026 user233",
    descriptionOfWork:
      "Single Tender / Proprietary flow test 21-05-2026 user233",
    divisionDepartment: "IITBOMBAY-UAT",
    closingDateTime: "May 26, 2026 7:00:00 PM",
  },
  {
    tender: "Tender 03 13-05-2026",
    descriptionOfWork: "Tender 03 13-05-2026",
    divisionDepartment: "IITBOMBAY-UAT",
    closingDateTime: "Jun 15, 2026 10:20:00 AM",
  },
  {
    tender: "Tender -PreBid Clarifications Demo",
    descriptionOfWork: "Tender -PreBid Clarifications Demo",
    divisionDepartment: "IITBOMBAY-UAT",
    closingDateTime: "May 25, 2027 3:30:00 PM",
  },
]
