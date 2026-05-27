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
import { Empty, EmptyTitle, EmptyDescription } from "@/components/ui/empty"

export default function BlacklistedUsersPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold tracking-tight mb-6">
        Debarred / Blacklisted Firms
      </h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Blacklisted Users</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sl.No</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>User Id</TableHead>
                  <TableHead>Period Of Blacklist From Date</TableHead>
                  <TableHead>Period Of Blacklist To Date</TableHead>
                  <TableHead>Reason For Blacklist</TableHead>
                  <TableHead>File</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* No records currently */}
              </TableBody>
            </Table>
          </div>

          <div className="mt-8">
            <Empty>
              <EmptyTitle>No records to display</EmptyTitle>
              <EmptyDescription>
                There are currently no debarred or blacklisted firms on record.
              </EmptyDescription>
            </Empty>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
