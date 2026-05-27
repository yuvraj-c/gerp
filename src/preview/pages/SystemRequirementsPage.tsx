import { Badge } from "@/components/ui/badge"
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
import { SYSTEM_REQUIREMENTS } from "@/preview/data/system-requirements"

export default function SystemRequirementsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold tracking-tight mb-6">
        e-Tendering / e-Auction / e-Procurement system
      </h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle>Recommended/Minimum System Requirements for users</CardTitle>
            <Badge variant="secondary">UPDATED ON -07-092023</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Requirement</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {SYSTEM_REQUIREMENTS.map((req, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium align-top">
                      {req.requirement}
                    </TableCell>
                    <TableCell className="align-top">
                      <ul className="list-inside list-disc space-y-1">
                        {req.details.split(" / ").map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    </TableCell>
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
