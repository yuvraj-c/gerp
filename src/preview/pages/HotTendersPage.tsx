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
import { 
  MagnifyingGlass, 
  Funnel,
  Printer,
  ArrowCounterClockwise,
  WarningCircle,
  Plus
} from "@phosphor-icons/react"
import {
  HOT_TENDER_RESULTS,
  HOT_TENDER_DEPARTMENTS,
} from "@/preview/data/hot-tenders"

export default function HotTendersPage() {
  const hasResults = HOT_TENDER_RESULTS && HOT_TENDER_RESULTS.length > 0;

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-border/40 pb-6">
        <div>
          <h1 className="font-heading text-2xl font-bold tracking-tight mb-2">Hot Tenders</h1>
          <p className="text-muted-foreground text-sm">Discover highly anticipated and time-sensitive tenders currently open for bidding</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="px-3 py-1.5 text-sm font-medium bg-muted/50 backdrop-blur-sm border-border/50 shadow-sm">
            Total Items: {hasResults ? HOT_TENDER_RESULTS.length : 0}
          </Badge>
        </div>
      </div>

      {/* Modern Filter Card */}
      <Card className="border-border/40 shadow-md overflow-hidden bg-card/40 backdrop-blur-xl">
        <CardHeader className="bg-muted/20 border-b border-border/40 py-4 flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/10">
              <Funnel className="w-4 h-4 text-primary" weight="bold" />
            </div>
            Search Hot Tenders
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-5">
            <div className="space-y-2">
              <Label htmlFor="ht-buyer" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Buyer</Label>
              <NativeSelect id="ht-buyer" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                <NativeSelectOption value="">Select</NativeSelectOption>
                <NativeSelectOption value="iitb">Indian Institute of Technology Bombay</NativeSelectOption>
              </NativeSelect>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="ht-tender" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tender</Label>
              <Input type="text" id="ht-tender" placeholder="Tender number" className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
            </div>

            <div className="space-y-2 lg:col-span-2">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estimated Cost</Label>
              <div className="flex items-center gap-2">
                <Input type="text" id="ht-cost-from" placeholder="From" className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
                <span className="text-muted-foreground">-</span>
                <Input type="text" id="ht-cost-to" placeholder="To" className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ht-region" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Region</Label>
              <NativeSelect id="ht-region" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                <NativeSelectOption value="">Select Region</NativeSelectOption>
              </NativeSelect>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ht-line" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Line</Label>
              <Input type="text" id="ht-line" placeholder="Line number" className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="ht-emd" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">EMD</Label>
              <Input type="text" id="ht-emd" placeholder="EMD amount" className="bg-background/50 focus:bg-background transition-colors shadow-sm" />
            </div>

            <div className="space-y-2 lg:col-span-2">
              <Label htmlFor="ht-department" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">DIVISION/DEPARTMENT</Label>
              <NativeSelect id="ht-department" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                <NativeSelectOption value="">Select Department</NativeSelectOption>
                {HOT_TENDER_DEPARTMENTS.map((dept) => (
                  <NativeSelectOption key={dept} value={dept}>
                    {dept}
                  </NativeSelectOption>
                ))}
              </NativeSelect>
            </div>

            <div className="space-y-2 lg:col-span-2">
              <Label htmlFor="ht-tender-type" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tender Type</Label>
              <NativeSelect id="ht-tender-type" className="w-full bg-background/50 focus:bg-background transition-colors shadow-sm">
                <NativeSelectOption value="Open">Open</NativeSelectOption>
                <NativeSelectOption value="Limited">Limited</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
            <Button variant="outline" className="gap-2 shadow-sm">
              <ArrowCounterClockwise className="w-4 h-4" />
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
                    <TableHead className="w-16 text-center">Sl No.</TableHead>
                    <TableHead>Tender</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead className="text-center">Line</TableHead>
                    <TableHead className="text-right">Estimated Cost</TableHead>
                    <TableHead className="text-right">EMD</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>DIVISION/DEPARTMENT</TableHead>
                    <TableHead>Closing Date &amp; Time</TableHead>
                    <TableHead className="text-right">Time Left (HH:MM)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hasResults ? (
                    HOT_TENDER_RESULTS.map((result) => (
                      <TableRow key={result.slNo} className="hover:bg-muted/20 transition-colors">
                        <TableCell className="text-center font-medium text-muted-foreground">{result.slNo}</TableCell>
                        <TableCell className="font-mono text-sm text-primary font-semibold">{result.tender}</TableCell>
                        <TableCell className="font-medium">{result.buyer}</TableCell>
                        <TableCell className="text-center">{result.line}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{result.estimatedCost}</TableCell>
                        <TableCell className="text-right font-mono text-sm">{result.emd}</TableCell>
                        <TableCell><span className="text-sm">{result.region}</span></TableCell>
                        <TableCell><span className="text-sm">{result.divisionDepartment}</span></TableCell>
                        <TableCell className="text-sm text-muted-foreground">{result.closingDateTime}</TableCell>
                        <TableCell className="text-right">
                          <Badge variant="destructive" className="font-mono shadow-sm">
                            {result.timeLeftForClosing}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={10} className="h-32 text-center">
                        <div className="flex flex-col items-center justify-center text-muted-foreground">
                          <WarningCircle className="w-8 h-8 mb-2 text-destructive/80" weight="duotone" />
                          <span className="font-medium text-destructive">Tender(s) Not Available For Display</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
          </Table>
        </Card>
      </div>
    </div>
  )
}
