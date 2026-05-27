import { Empty, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import { Info } from "@phosphor-icons/react"

export default function AboutPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold tracking-tight mb-6">About Us</h1>

      <div>
        <Empty>
          <EmptyMedia variant="icon">
            <Info size={24} />
          </EmptyMedia>
          <EmptyTitle>About IIT Bombay</EmptyTitle>
          <EmptyDescription>Visit iitb.ac.in for institutional information.</EmptyDescription>
          <EmptyContent>
            <Button variant="outline" asChild>
              <a href="https://www.iitb.ac.in" target="_blank" rel="noopener noreferrer">Visit iitb.ac.in</a>
            </Button>
          </EmptyContent>
        </Empty>
      </div>
    </div>
  )
}
