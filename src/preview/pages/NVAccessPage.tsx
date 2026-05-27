import { Empty, EmptyMedia, EmptyTitle, EmptyDescription } from "@/components/ui/empty"
import { SpeakerHigh } from "@phosphor-icons/react"

export default function NVAccessPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold tracking-tight mb-6">NV Access</h1>

      <div>
        <Empty>
          <EmptyMedia variant="icon">
            <SpeakerHigh size={24} />
          </EmptyMedia>
          <EmptyTitle>Screen Reader Access</EmptyTitle>
          <EmptyDescription>Accessibility and screen reader options.</EmptyDescription>
        </Empty>
      </div>
    </div>
  )
}
