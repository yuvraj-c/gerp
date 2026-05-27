/**
 * System requirements data — sourced verbatim from gerp-content-audit.md (Page 6).
 * Structured as a typed array so a future API integration is obvious.
 */

export interface SystemRequirement {
  requirement: string
  details: string
}

export const SYSTEM_REQUIREMENTS: SystemRequirement[] = [
  {
    requirement: "Operating System",
    details:
      "1. Windows 8, 10... / 2. Ubuntu Linux Version 18.0",
  },
  {
    requirement: "MS Office Version (Word & Excel)",
    details:
      "1. General Documents — MS Office 2010 and above / 2. Bid documents / Price bids / Technical bids — MS Excel 2010 and above in .xlsm macro enabled format only",
  },
  {
    requirement: "Excel Macro",
    details: "1. Should be enabled",
  },
  {
    requirement: "Document / File Types",
    details:
      "1. General Documents — JPG, BMP, GIF, PNG, PDF, ZIP / 2. Files with .EXE, .PSD extensions are not allowed / 3. Each File size not to exceed 5 Mb / 4. All uploaded files should be virus free and error free",
  },
  {
    requirement: "Internet Browsers",
    details:
      "1. Google Chrome (Latest versions) / 2. Mozilla Firefox (Latest versions) / 3. Microsoft Edge",
  },
  {
    requirement: "Browser settings",
    details:
      "1. Disable the 'Popup Blocker' in browser under Tools and select 'Turn Off' mode.",
  },
  {
    requirement: "Java Version",
    details:
      "Should Support JRE - Java Runtime Environment / 1. Java JRE 8 and above / 2. Java Web Start - Auto Launch of JNLP file / 3. Add e-Procurement domain URL in the java exception site list under security tab",
  },
  {
    requirement: "PC / Laptop recommended configuration",
    details:
      "1. CPU speed of 2.0 GHz / 2. Minimum 4 GB of RAM Memory / 3. USB Ports / 4. Internet Data Cards / Dongle with 4G / 5. Internet Broadband: Minimum 4 Mbps Broadband speed / Note: Anti-virus software should be enabled and updated regularly",
  },
  {
    requirement: "PKI eToken Drivers for DSC log-in",
    details:
      "eToken drivers has to be installed and configured in the Browsers. / Supported eTokens: 1. ePass HyperSecure 2003 V3.0 / 2. WatchData ProX Tokens V3.0 / 3. Safenet",
  },
]
