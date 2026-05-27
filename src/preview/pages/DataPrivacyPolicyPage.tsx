import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function DataPrivacyPolicyPage() {
  return (
    <div>
      <div className="mb-2">
        <h1 className="font-heading text-2xl font-bold text-center">
          Data Privacy Policy
        </h1>
        <p className="mt-2 text-base font-semibold text-center">
          Indian Institute of Technology Bombay
        </p>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Data Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p className="font-medium">
            We hereby agree and consent to the below Data Privacy policy:
          </p>

          <p>
            By accessing and using this e-Procurement platform, you (the
            &quot;VENDOR&quot;) provide your free, specific and informed consent to the
            collection, storage, processing, and use of your personal data for
            e-Procurement purposes in accordance with applicable laws, including
            the Digital Personal Data Protection Act, 2023.
          </p>

          <Separator />

          <p>
            &quot;Personal Data&quot; means any information that can directly or indirectly
            identify a natural person or as that term (or similar variants) may
            otherwise be defined under applicable data protection and privacy
            laws, rules and regulations (&quot;Data Privacy Laws&quot;). The service
            provider agrees to protect such Personal Data received and confirm
            that they will not share any Personal Data received under this
            service with any external parties in compliance with DPDP Act, 2023
            and applicable Data Privacy Rules. It is pertinent to mention that
            the client department shall have access to the vendor profile
            including the personal data.
          </p>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">
              Storing Your Personal Data
            </h3>
            <p className="mt-2">
              Minimal personal data (ex., Email address, phone, PAN) is
              collected from Bidder / Vendor in the portal and is stored in safe
              and secure servers. All sensitive information is stored in
              encrypted mode. We provide you with the facility to view or edit
              your company&apos;s/personal information and such information is used for
              sending communication alerts through email and SMS. You will be
              required to sign in with your credentials along with Digital
              Signature Certificate in the prescribed manner as provided on the
              sites to verify your authenticity and then view / edit your
              information.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Erasure of Vendor Data</h3>
            <p className="mt-2">
              Bidder / Vendor shall make a request in such manner as may be
              prescribed to the government user department for erasure of their
              personal data, and upon receipt of such a request, the government
              user department shall decide on the request. Please note that the
              retention of the profile information is necessary for the specified
              purpose of procurement &amp; for compliance with any law being in
              force.
            </p>
            <p className="mt-2 italic text-muted-foreground">
              Note: Withdrawal of consent may impact your ability to participate
              in ongoing or future tenders.
            </p>
          </section>

          <Separator />

          <p className="text-xs text-muted-foreground">
            Any grievances or complaints about the usage of the e-Procurement
            site may be addressed to mail@etenderwizard.com.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
