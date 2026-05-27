import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function DetailsPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold tracking-tight mb-6">Session Details</h1>

      <Card className="max-w-lg">
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 items-center gap-1 sm:grid-cols-[140px_1fr] sm:gap-2">
              <span className="text-sm font-medium">Dept ID</span>
              <span className="text-sm text-muted-foreground">—</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2 items-center">
              <span className="text-sm font-medium">Details</span>
              <span className="text-sm text-muted-foreground">—</span>
            </div>
            <div className="grid grid-cols-[140px_1fr] gap-2 items-center">
              <span className="text-sm font-medium">Date & Time</span>
              <span className="text-sm text-muted-foreground">—</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline">Close</Button>
          {/* TODO: wire to navigation back */}
        </CardFooter>
      </Card>
    </div>
  )
}
