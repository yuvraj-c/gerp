import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"

const GLOSSARY = [
  { term: "HOME", description: "Home Page of the e-Tendering/ e-Procurement website." },
  { term: "ABOUT US", description: "The history of Department can be viewed." },
  { term: "SUPPORT/ VENDOR INFO/ HELP MANUAL", description: "The vendor/ contractor can View /Download the Help and FAQ Documents." },
  { term: "CONTACT US/ CONTACTS", description: "The details/ contact persons name and phone Numbers of the e-tendering/ e-Procurement HELP Desk and Departmental Officials are available." },
  { term: "TENDERS/ TENDER FREE VIEW/ OTHER TENDERS", description: "To view the details of all the authorized tenders which are due for Request until the request close date and time." },
  { term: "REGISTRATION/ REGISTER ME/ NEW VENDOR REGISTRATION", description: "New Vendors can enrol their companies/ individual firm in the site to obtain the USER ID and password to participate in the tenders/ auctions." },
  { term: "COMMUNICATION/ IMPORTANT CIRCULARS/ IMPORTANT INFORMATION", description: "To view the circulars/ guidelines issued by various departments." },
  { term: "HOT TENDERS", description: "The user can view the tenders which are due for closing within 24hrs." },
  { term: "DWF VIEWER", description: "Vendors can Download the DWF Viewer to view converted auto cad drawings." },
  { term: "QUERY MONITORING SYSTEM/ VENDOR QUERY MANAGEMENT SYSTEM/ COMPLAINTS/ SUGGESTIONS", description: "The vendor/ contractor can submit his query related to e-Tendering/ e-Procurement website." },
  { term: "ACROBAT READER", description: "Vendors can Download the Acrobat Reader to view PDF format files." },
  { term: "DIGITAL SIGNATURE", description: "Link to download the application forms for Digital Signature Certificate." },
  { term: "FORMAT FOR OFFICIALS", description: "The department officials can download the sample tender documents and Performa formats for the user ID creation." },
  { term: "FLASH PLAYER", description: "For the user to download the flash player." },
  { term: "FAQ", description: "The vendor can view the frequently asked questions regarding the e-Procurement/e-Procurement portal." },
  { term: "USER ID", description: "Login credentials for the USER to enter the user ID of the particular persons (Buyer or Vendor) to login for department site." },
  { term: "PASSWORD", description: "To enter the password of the respective USER ID to login." },
  { term: "ACTIVITY", description: "Buyer Users have to select the option during log-in to for carrying out the intended activity like Actions, Tender, eProcurement. Similarly, Vendor (Vendors) will login to check or to Participate for Tenders/ Auctions." },
  { term: "NEW TENDER/ UN APPLIED", description: "Tenders which are due for request will be displayed under this section. User can request the tender, view the free documents." },
  { term: "IN PROGRESS", description: "The participated tenders are listed here. User can submit the document, withdraw the submitted bid before closing of the tender dates, verify the payments made." },
  { term: "EDIT ATTACHMENTS", description: "The buyer can upload the Tender Notifications, Tender documents such as Price Bid, Technical Bid, and Templates etc. From vendor/ contractor end, they can download the forms, can enter Form Fee, EMD and can upload required document." },
  { term: "OPENED", description: "The link provided to check the tenders which are Opened Recently and Beyond." },
  { term: "AWARDED", description: "To get the list of tenders which are processed and awarded by the department to the Particular firm (Contractor/ vendor)." },
  { term: "DISQUALIFIED/ WITHDRAWN", description: "The will get the list of tenders which are Cancelled by the department/ Withdrawn by the Vendor/ Disqualified by the Department to the Particular firm (Contractor/ vendor)." },
  { term: "MODIFY PROFILE", description: "The user profile can modified any time by the user after log-in." },
  { term: "DOCUMENT LIBRARY", description: "This acts as a library for the e-Tendering/e-Procurement. User can upload supporting documents through this link and attach to the concerned tenders whenever required." },
  { term: "TENDER SEARCH", description: "The search facility is provided by e-Tendering/ e-Procurement to search the tender based on work, dates, value of work, region, etc." },
  { term: "MODIFY PASSWORD", description: "The user can modify his password any time. As a security measure, it is advisable to modify password frequently." },
  { term: "LOGOUT", description: "This link redirects the user to log-out of the eProcurement portal and directs to log in page." },
] as const

export default function GlossaryPage() {
  return (
    <div>
      <div className="mb-2">
        <h1 className="font-heading text-2xl font-bold text-center">
          Glossary of Terms
        </h1>
        <p className="mt-2 text-base font-semibold text-center">
          Indian Institute of Technology Bombay
        </p>
      </div>

      <Card className="mt-6 overflow-hidden">
        <CardHeader>
          <CardTitle>Terminology</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
          <Table className="w-full table-fixed">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[8%] whitespace-normal">Sl. No.</TableHead>
                  <TableHead className="w-[30%] whitespace-normal">Terminology</TableHead>
                  <TableHead className="w-[62%] whitespace-normal">Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {GLOSSARY.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium whitespace-normal align-top">
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium whitespace-normal break-words align-top">
                      {item.term}
                    </TableCell>
                    <TableCell className="whitespace-normal break-words">{item.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
