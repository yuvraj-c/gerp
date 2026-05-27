import { Link } from "react-router-dom"
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Item, ItemGroup, ItemContent, ItemTitle } from "@/components/ui/item"
import { LATEST_TENDERS } from "@/preview/data/tenders"
import { LATEST_CORRIGENDUMS } from "@/preview/data/corrigendums"

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/*
        Single grid for both rows so columns align perfectly:
        - Row 1: Hero spans cols 1-2, News in col 3
        - Row 2: Latest Tenders in col 1, Latest Corrigendums in col 2, Links in col 3
      */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-[2fr_2fr_1fr]">
        {/* ── Row 1 ── */}

        {/* Hero image — spans first 2 columns */}
        <Card className="overflow-hidden p-0 md:col-span-2">
          <div
            className="relative flex min-h-[280px] items-end rounded-lg bg-cover bg-center lg:min-h-[340px]"
            style={{ backgroundImage: "url('/slider1.jpg')" }}
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="relative z-10 p-6 text-white lg:p-8">
              <h2 className="font-heading text-xl font-bold lg:text-2xl">
                Welcome to the eProcurement Portal
              </h2>
              <p className="mt-1 text-sm opacity-90 lg:text-base">
                GERP — Indian Institute of Technology Bombay
              </p>
            </div>
          </div>
        </Card>

        {/* News card — col 3 */}
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>News</CardTitle>
            <CardAction>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" size="sm">
                    More
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>All News</DialogTitle>
                  </DialogHeader>
                  <div className="max-h-[60vh] space-y-4 overflow-y-auto">
                    <div className="rounded-md border p-3">
                      <p className="text-sm">
                        GERP - Welcome to eProcurment Portal of IIT Bombay
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Latest announcement
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p>GERP - Welcome to eProcurment Portal of IIT Bombay</p>
          </CardContent>
        </Card>

        {/* ── Row 2 ── */}

        {/* Latest Tenders — col 1 */}
        <Card className="overflow-hidden flex flex-col h-[20rem] md:h-[24rem] lg:h-[28rem]">
          <CardHeader className="shrink-0">
            <CardTitle>Latest Tenders</CardTitle>
            <CardAction>
              <Button variant="link" size="sm" asChild>
                <Link to="/preview/tender-free-view">More</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
            <table className="w-full table-fixed caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b">
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[22%]">
                    Tender
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[36%]">
                    Description
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[20%]">
                    Division
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[22%]">
                    Closing Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {LATEST_TENDERS.map((tender, index) => (
                  <tr
                    key={index}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-2 align-middle break-words">
                      {tender.tender}
                    </td>
                    <td className="p-2 align-middle break-words">
                      {tender.descriptionOfWork}
                    </td>
                    <td className="p-2 align-middle break-words">
                      {tender.divisionDepartment}
                    </td>
                    <td className="p-2 align-middle break-words">
                      {tender.closingDateTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Latest Corrigendums — col 2 */}
        <Card className="overflow-hidden flex flex-col h-[20rem] md:h-[24rem] lg:h-[28rem]">
          <CardHeader className="shrink-0">
            <CardTitle>Latest Corrigendums</CardTitle>
            <CardAction>
              <Button variant="link" size="sm" asChild>
                <Link to="/preview/tender-free-view">More</Link>
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto overflow-x-hidden min-h-0">
            <table className="w-full table-fixed caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b">
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[22%]">
                    Tender
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[36%]">
                    Description
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[20%]">
                    Doc Request
                  </th>
                  <th className="h-10 px-2 text-left align-middle font-medium text-foreground w-[22%]">
                    Closing Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {LATEST_CORRIGENDUMS.map((corrigendum, index) => (
                  <tr
                    key={index}
                    className="border-b transition-colors hover:bg-muted/50"
                  >
                    <td className="p-2 align-middle break-words">
                      {corrigendum.tender}
                    </td>
                    <td className="p-2 align-middle break-words">
                      {corrigendum.corrigendumDescription}
                    </td>
                    <td className="p-2 align-middle break-words">
                      {corrigendum.documentRequestDateTime}
                    </td>
                    <td className="p-2 align-middle break-words">
                      {corrigendum.closingDateTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Links — col 3 (aligned with News above) */}
        <Card className="overflow-hidden flex flex-col h-[20rem] md:h-[24rem] lg:h-[28rem]">
          <CardHeader className="shrink-0">
            <CardTitle>Links</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto min-h-0">
            <ItemGroup>
              <Item variant="default" size="sm">
                <ItemContent>
                  <ItemTitle>
                    <Link
                      to="/preview/circulars"
                      className="text-primary hover:underline"
                    >
                      Latest circulars/ Formats/ Help Manuals/ FAQs
                    </Link>
                  </ItemTitle>
                </ItemContent>
              </Item>
              <Item variant="default" size="sm">
                <ItemContent>
                  <ItemTitle>
                    <Link
                      to="/preview/blacklisted-users"
                      className="text-primary hover:underline"
                    >
                      Debarred/ Blacklisted firms
                    </Link>
                  </ItemTitle>
                </ItemContent>
              </Item>
            </ItemGroup>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
