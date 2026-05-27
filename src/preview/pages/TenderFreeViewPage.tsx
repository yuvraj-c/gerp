import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MagnifyingGlass, Funnel, Printer, Gear, X, Plus } from "@phosphor-icons/react"

const MOCK_DATA = [
  {
    id: 1,
    buyer: "Indian Institute of Technology Bombay",
    tenderNo: "DC/26-01",
    line: 1,
    fee: "Rs.0",
    emd: "Rs.0",
    cot: "IITBOMBAY-UAT",
    stage: "Latest",
    region: "UAT",
    closingDate: "01-06-2026 11:30",
    typeOfTender: "Open",
    tenderType: "No",
    desc: "Civil Interior work of Trust lab"
  },
  {
    id: 2,
    buyer: "Indian Institute of Technology Bombay",
    tenderNo: "Manual Tender with out participation option",
    line: 1,
    fee: "Rs.1,000.00",
    emd: "Rs.25,000.00",
    cot: "IITBOMBAY-UAT",
    stage: "Latest",
    region: "UAT",
    closingDate: "26-05-2027 15:00",
    typeOfTender: "Open",
    tenderType: "No",
    desc: "Manual Tender with out participation option"
  },
  {
    id: 3,
    buyer: "Indian Institute of Technology Bombay",
    tenderNo: "Tender 03 13-05-2026",
    line: 1,
    fee: "Rs.0",
    emd: "Rs.0",
    cot: "IITBOMBAY-UAT",
    stage: "Latest",
    region: "UAT",
    closingDate: "15-06-2026 10:20",
    typeOfTender: "Open",
    tenderType: "No",
    desc: "Tender 03 13-05-2026"
  },
  {
    id: 4,
    buyer: "Indian Institute of Technology Bombay",
    tenderNo: "Tender -PreBid Clarifications Demo",
    line: 1,
    fee: "Rs.0",
    emd: "Rs.0",
    cot: "IITBOMBAY-UAT",
    stage: "Latest",
    region: "UAT",
    closingDate: "25-05-2027 15:30",
    typeOfTender: "Open",
    tenderType: "No",
    desc: "Tender -PreBid Clarifications Demo"
  }
]

export default function TenderFreeViewPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight mb-2">Tender Free View</h1>
          <p className="text-muted-foreground text-sm">Search and browse through all available tenders</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium bg-muted/50 backdrop-blur-sm border-border/50 shadow-sm">Total Records: 4</Badge>
          <Badge variant="outline" className="px-3 py-1.5 text-sm font-medium border-border/50 shadow-sm bg-background/50 backdrop-blur-sm">Displaying: (1-4)</Badge>
        </div>
      </div>

      {/* Modern Filter Card */}
      <Card className="border-border/40 shadow-md overflow-hidden bg-card/40 backdrop-blur-xl">
        <CardHeader className="bg-muted/20 border-b border-border/40 py-4 flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/10">
              <Funnel className="w-4 h-4 text-primary" weight="bold" />
            </div>
            Advanced Search
          </CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors">
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="buyer" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Buyer</Label>
              <NativeSelect id="buyer" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                <NativeSelectOption value="iitb">Indian Institute of Technology Bombay</NativeSelectOption>
              </NativeSelect>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tender-number" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tender Number</Label>
              <Input id="tender-number" placeholder="Enter tender number..." className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="line-number" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Line Number</Label>
              <Input id="line-number" placeholder="Enter line number..." className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tender-description" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tender Description</Label>
              <Input id="tender-description" placeholder="Keywords..." className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cot" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">COT</Label>
              <NativeSelect id="cot" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                <NativeSelectOption value="all">ALL</NativeSelectOption>
                <NativeSelectOption value="iitbombay-uat">IITBOMBAY-UAT</NativeSelectOption>
              </NativeSelect>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="tender-stage" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tender Stage</Label>
                <NativeSelect id="tender-stage" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                  <NativeSelectOption value="latest">Latest</NativeSelectOption>
                </NativeSelect>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tender-region" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tender Region</Label>
                <NativeSelect id="tender-region" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                  <NativeSelectOption value="all">ALL</NativeSelectOption>
                  <NativeSelectOption value="uat">UAT</NativeSelectOption>
                </NativeSelect>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
            <Button variant="outline" className="gap-2 shadow-sm">
              Reset Filters
            </Button>
            <div className="flex items-center gap-3">
              <Button size="icon" variant="secondary" className="rounded-full shadow-sm hover:shadow-md transition-all">
                <Plus className="w-4 h-4" weight="bold" />
              </Button>
              <Button className="gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <MagnifyingGlass className="w-4 h-4" weight="bold" />
                Search Tenders
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Table Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Search Results</h2>
          <Button variant="outline" size="sm" className="gap-2 text-muted-foreground hover:text-foreground shadow-sm bg-background/50 backdrop-blur-sm">
            <Printer className="w-4 h-4" />
            Print
          </Button>
        </div>

        <Card className="overflow-hidden border-border/40 shadow-md">
          <Table className="min-w-[1200px]">
            <TableHeader className="bg-muted/30">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-16 text-center">Actions</TableHead>
                    <TableHead className="w-16 text-center">Sl No.</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Tender Number</TableHead>
                    <TableHead className="text-center">Line</TableHead>
                    <TableHead className="text-right">Form Fee</TableHead>
                    <TableHead className="text-right">EMD</TableHead>
                    <TableHead>COT</TableHead>
                    <TableHead>Stage</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Closing Date &amp; Time</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_DATA.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableRow className="group border-b-0 hover:bg-muted/20 transition-colors">
                        <TableCell className="text-center">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground opacity-50 group-hover:opacity-100 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                            <Gear className="w-4 h-4" weight="fill" />
                          </Button>
                        </TableCell>
                        <TableCell className="text-center font-medium text-muted-foreground">{row.id}</TableCell>
                        <TableCell className="font-medium">{row.buyer}</TableCell>
                        <TableCell className="font-mono text-sm text-primary font-semibold">{row.tenderNo}</TableCell>
                        <TableCell className="text-center">{row.line}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{row.fee}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{row.emd}</TableCell>
                        <TableCell><Badge variant="secondary" className="font-mono text-[10px] bg-secondary/50">{row.cot}</Badge></TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1.5 text-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            {row.stage}
                          </span>
                        </TableCell>
                        <TableCell><span className="text-sm">{row.region}</span></TableCell>
                        <TableCell className="text-sm text-muted-foreground">{row.closingDate}</TableCell>
                        <TableCell><span className="text-sm">{row.typeOfTender}</span></TableCell>
                      </TableRow>
                      <TableRow className="border-b border-border/30 bg-muted/5">
                        <TableCell colSpan={12} className="py-3 px-6 text-sm text-muted-foreground border-t-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground/70 uppercase text-xs tracking-wider">Description:</span>
                            <span>{row.desc}</span>
                          </div>
                        </TableCell>
                      </TableRow>
                    </React.Fragment>
                  ))}
                </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
