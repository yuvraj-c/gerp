import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function TermsAndConditionsPage() {
  return (
    <div>
      <div className="mb-2">
        <h1 className="font-heading text-2xl font-bold text-center">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-base font-semibold text-center">
          Indian Institute of Technology Bombay
        </p>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>
            Terms and Conditions for usage of e-Tendering/ e-Auction/
            e-Procurement system
          </CardTitle>
        </CardHeader>
        <CardContent className="prose prose-sm max-w-none space-y-4 text-sm">
          <section>
            <h3 className="text-sm font-semibold">Definitions :</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <strong>Service Provider</strong> shall mean Antares Systems
                Limited, Technology Service Provider TSP and its associated
                Partners responsible for operating the e-Procurement System under
                agreement for services executed with the Customer Department
                DEPT.
              </li>
              <li>
                <strong>PORTAL</strong> means Electronic Procurement / GERP
                system operated on behalf of the Dept for e-Tender / e-Auction /
                Asset / CMS services.
              </li>
              <li>
                <strong>REGISTERED USER</strong> means the DEPT or VENDOR who
                have registered and obtained access to use the portal.
              </li>
            </ul>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">
              We hereby agree and consent to the below terms &amp; conditions:
            </h3>
            <ol className="mt-2 list-decimal space-y-3 pl-5">
              <li>
                The SERVICE PROVIDER agrees to grant the VENDOR the right to
                access and use e-Procurement System on the terms set out herein
                and such other terms as may be specified by the DEPT from time to
                time.
              </li>
              <li>
                The VENDOR also recognizes and acknowledges that the
                e-Procurement System is customized to the DEPTs requirements by
                the Service Provider under an agreement for services executed
                between the DEPT and the Service Provider.
              </li>
              <li>
                The VENDOR hereby agrees and acknowledges that Service Provider
                shall not be held responsible or liable for any damage or loss
                resulting from the use of the e-Proc System or by not adhering to
                System Requirements recommended. (refer the link System
                Requirements in the Home Page)
              </li>
              <li>
                The information given by the VENDORS is absolutely by and under
                his discretion and Service Provider will not verify or preserve
                any type of documentation in support of the information provided
                by the REGISTERED USER.
              </li>
              <li>
                SERVICE PROVIDER shall not be responsible for any
                misuse/misplacement and revealing of identity and password to
                unauthorized persons and its subsequent effect from the
                REGISTERED USERS.
              </li>
              <li>
                Few add-on services are provided to the REGISTERED USER such as
                e-mail alerts, e-notifications, SMS messages and reminders. This
                is provided with an intention to provide additional information
                on the e-Procurement PORTAL to the USER. E-mail and SMS alerts
                may not be delivered to the recipient if there are any issues
                with email service provider or at the recipients end, like SPAM
                mail, incorrect recipient email address. These services are
                purely promotional in nature, and in no way enforces the SERVICE
                PROVIDER to provide these services.
              </li>
              <li>
                Any updates related to the tender / auction process shall be sent
                to email address registered in your registration form. Vendor has
                to ensure that the given email address is valid and active.
              </li>
              <li>
                I hereby agree and confirm that I have read and understood the
                contents of the Disclaimer and Notice portion of the
                registration form and hereby provide my consent to the processing
                of my personal data (as that term is defined in the Digital
                Personal Data Protection Act, 2023, Personal Data) read with
                relevant rules for the specified purposes as set out therein.
              </li>
            </ol>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">
              We hereby agree and consent to the below Data Privacy policy:
            </h3>
            <ol className="mt-2 list-upper-roman space-y-3 pl-5" style={{ listStyleType: "upper-roman" }}>
              <li>
                By accessing and using this e-Procurement platform, you (the
                VENDOR) provide your free, specific and informed consent to the
                collection, storage, processing, and use of your personal data
                for e-Procurement purposes in accordance with applicable laws,
                including the Digital Personal Data Protection Act, 2023.
              </li>
              <li>
                Personal Data means any information that can directly or
                indirectly identify a natural person or as that term (or similar
                variants) may otherwise be defined under applicable data
                protection and privacy laws, rules and regulations (Data Privacy
                Laws). The service provider agrees to protect such Personal Data
                received and confirm that they will not share any Personal Data
                received under this service with any external parties in
                compliance with DPDP Act, 2023 and applicable Data Privacy Rules.
                It is pertinent to mention that the client department shall have
                access to the vendor profile including the personal data.
              </li>
              <li>
                <strong>Storing Your Personal Data :</strong> Minimal personal
                data (ex., Email address, phone, PAN) is collected from Bidder /
                Vendor in the portal and is stored in safe and secure servers.
                All sensitive information is stored in encrypted mode. We provide
                you with the facility to view or edit your company&apos;s/personal
                information and such information is used for sending
                communication alerts through email and SMS. You will be required
                to sign in with your credentials along with Digital Signature
                Certificate in the prescribed manner as provided on the sites to
                verify your authenticity and then view / edit your information.
              </li>
              <li>
                <strong>Erasure of Vendor data :</strong> Bidder / Vendor shall
                make a request in such manner as may be prescribed to the
                government user department for erasure of their personal data,
                and upon receipt of such a request, the government user
                department shall decide on the request. Please note that the
                retention of the profile information is necessary for the
                specified purpose of procurement &amp; for compliance with any
                law being in force. <em>Note: Withdrawal of consent may impact
                your ability to participate in ongoing or future tenders.</em>
              </li>
            </ol>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">
              We hereby agree and consent to the below Artificial Intelligence
              (AI) Usage policy
            </h3>
            <ol className="mt-2 list-[lower-alpha] space-y-3 pl-5">
              <li>
                This platform uses Artificial Intelligence (AI) and Machine
                Learning (ML) technologies to enhance user experience, improve
                efficiency, and support procurement processes.
              </li>
              <li>
                <strong>Purpose of AI Usage :</strong> AI features may be used
                for Intelligent bid form generation, Natural language-based
                tender creation and search, Data analytics, insights, and process
                optimization.
              </li>
              <li>
                Users are advised to review all AI-generated outputs before use.
                Certain AI-assisted features may be optional wherever feasible.
              </li>
              <li>
                AI-generated outputs may contain inaccuracies, omissions, or
                unintended interpretation. The platform does not guarantee the
                accuracy, completeness, or suitability of AI-generated content.
              </li>
              <li>
                Use of AI-generated suggestions is at the users own discretion
                and risks. Service provider shall not be liable for any direct,
                indirect, incidental, or consequential losses arising from
                reliance on AI-generated outputs.
              </li>
              <li>
                By accessing or using the platform, you agree to the use of AI
                features as part of the service delivery.
              </li>
            </ol>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Consent Declaration</h3>
            <p className="mt-2">
              I hereby confirm that I have read, understood, and agree to the
              Terms &amp; conditions, Data Privacy Policy and AI usage policy in
              processing of my personal data in accordance with the consent
              notice and applicable laws.
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Processing of your personal data for the purposes stated above
              </li>
              <li>
                Sharing of your data with authorized government departments,
                banks, and payment gateways involved in the procurement process
              </li>
              <li>
                Storage of your data in secure systems in compliance with
                applicable laws
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Any claims, grievances, complaints about the usage of the
              e-Procurement site may be addressed to mail@etenderwizard.com
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  )
}
