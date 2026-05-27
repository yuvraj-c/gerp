/**
 * Hot tenders data — sourced verbatim from gerp-content-audit.md (Page 9).
 * Structured as typed arrays so a future API integration is obvious.
 */

export interface HotTender {
  slNo: number
  tender: string
  buyer: string
  line: string
  estimatedCost: string
  emd: string
  region: string
  divisionDepartment: string
  closingDateTime: string
  timeLeftForClosing: string
  descriptionOfWork: string
}

export const HOT_TENDER_RESULTS: HotTender[] = [
  {
    slNo: 1,
    tender: "Single Tender / Proprietary flow test 21-05-2026 user233",
    buyer: "Indian Institute of Technology Bombay",
    line: "1",
    estimatedCost: "Rs. 0",
    emd: "--NA--",
    region: "UAT",
    divisionDepartment: "IITBOMBAY-UAT",
    closingDateTime: "26-05-2026 19:00",
    timeLeftForClosing: "",
    descriptionOfWork:
      "Single Tender / Proprietary flow test 21-05-2026 user233",
  },
]

/** Department options for the DIVISION/DEPARTMENT filter */
export const HOT_TENDER_DEPARTMENTS: string[] = [
  "IITBOMBAY-Electrical_Maintenance_Division",
  "IITBOMBAY-Estate_Department",
  "IITBOMBAY-Fire_and_Safety_Department",
  "IITBOMBAY-Horticulture_Department",
  "IITBOMBAY-Infrastructure_Planning_and_Support",
  "IITBOMBAY-Materials_Management_Division",
  "IITBOMBAY-UAT",
]
