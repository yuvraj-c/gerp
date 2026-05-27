import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div>
      <h1 className="font-heading text-2xl font-bold tracking-tight mb-6">Contact Us</h1>

      {/* Help Desk section */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Help desk</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <span className="text-sm font-medium">Contact No :</span>
              <p className="text-sm text-muted-foreground">xxx-xxxxxxxx</p>
              <p className="text-sm text-muted-foreground">xxx-xxxxxxxx</p>
            </div>
            <div>
              <span className="text-sm font-medium">E-mail :</span>
              <p className="text-sm text-muted-foreground">
                johndoe@example.com
              </p>
              <p className="text-sm text-muted-foreground">
                janedoe@example.com
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
