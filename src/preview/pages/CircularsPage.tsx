import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Empty, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty"
import { FileText } from "@phosphor-icons/react"

export default function CircularsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold tracking-tight mb-6">
        Sub Page Links
      </h1>

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Latest circulars / Formats / Manual / FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-8">
            <Empty>
              <EmptyMedia variant="icon">
                <FileText size={24} />
              </EmptyMedia>
              <EmptyTitle>No circulars or FAQs available</EmptyTitle>
              <EmptyDescription>
                Circulars, formats, and help manuals will be listed here when published.
              </EmptyDescription>
            </Empty>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
