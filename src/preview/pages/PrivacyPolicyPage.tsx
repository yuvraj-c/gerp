import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div>
      <div className="mb-2">
        <h1 className="font-heading text-2xl font-bold text-center">
          Privacy Policy
        </h1>
        <p className="mt-2 text-base font-semibold text-center">
          Indian Institute of Technology Bombay
        </p>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Site Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            The e-Procurement service provider is committed to ensuring that your
            privacy is protected. All information collected from you which you
            can be identified when using this website will only be used in
            accordance with this privacy statement. As a company, we strictly
            adhere to all industry guidelines and we continually review our
            policy and procedures to ensure the safety and protection of our
            visitor and customer information.
          </p>
          <p className="text-xs text-muted-foreground">
            This policy is effective from January 2012. We may change this policy
            from time to time by updating this page. You should check this page
            regularly to ensure that you are aware of any changes.
          </p>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Information We Collect</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Details of your visits to our website and the resources that you
                access, including, but limited to traffic data, location data,
                weblogs and other communication data.
              </li>
              <li>
                Information that you provide by filling in sign up forms on our
                website, such as Vendor registration, e-Payment transactions,
                etc.
              </li>
              <li>
                IP (Internet Protocol) address of the machine accessed the
                application
              </li>
              <li>
                Domain name (for example .com, .gov, .in, .au, .uk etc.)
              </li>
              <li>Address of your server</li>
              <li>Date and time of visits to the site</li>
              <li>Pages accessed and documents downloaded</li>
              <li>
                Type of browser and operating system you have used.
              </li>
              <li>
                Any other KYC Information provided to us when you communicate
                with us for any reason.
              </li>
            </ul>
            <p className="mt-2">
              The information collected during each visit is combined to produce
              reports in order to identify patterns of usage of Tenderwizard.
              This will assist us in improving the services offered by us.
            </p>
            <p className="mt-2">
              The service provider is bound to disclose or share information that
              identifies individual machines, or potentially identifies
              sub-groupings of addresses, with consent or without consent or
              otherwise in accordance with the IT ACT 2000 (amended 2008).
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Use of Cookies</h3>
            <p className="mt-2">
              On few pages, we may gather information about your system
              environment for our log records and to provide statistical
              information regarding the use of our portal to buyer departments.
              Such information will not identify you personally. It is
              statistical data about our visitors and their use of our site.
            </p>
            <p className="mt-2">
              We may gather information about your internet environment by using
              a cookie file. Cookies allow web applications to respond to you as
              an individual. All computers have the ability to automatically
              accept or decline cookies.
            </p>
            <p className="mt-2">
              Please note that should you choose to decline cookies, you may be
              unable to access particular features of our website.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Use of Your Information</h3>
            <p className="mt-2">
              The information that we collect and store relating to you is
              primarily used to enable us to provide our services to you. In
              addition, we may use the information for the following purposes:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                To provide you with tender information / procurement information
                that is hosted by buyer departments.
              </li>
              <li>
                To provide SMS alerts / email messages to you whenever
                applicable.
              </li>
              <li>
                To notify you about any changes to our website, such as
                improvements or service/product changes, that may affect our
                service.
              </li>
            </ul>
            <p className="mt-2">
              This website takes every precaution to protect your information.
              When users submit sensitive information via the website, the
              information is protected both online and off-line. When our Vendor
              registration / Bidding forms asks the users to enter sensitive
              information, that information is encrypted and is protected with
              the best available encryption software in the industry - SSL.
            </p>
            <p className="mt-2">
              When making payments in the portal, the sensitive information like
              credit card numbers, bank account details will not be captured by
              ePayment gateway providers. The system shall not be storing this
              sensitive data anywhere in our application.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Security</h3>
            <p className="mt-2">
              We use safe, tested and quality technology for transmitting the
              received information so that quality and privacy of the data is
              neither impaired nor breached and a variety of security
              technologies and procedures like Password, SSL, PKI, Digital
              Signatures, asymmetric cryptography etc. are applied to protect
              personal/business information from unauthorized access, use or
              disclosure.
            </p>
            <p className="mt-2">
              It is your responsibility to keep your user credentials and
              password confidential. Keep changing the passwords regularly in a
              secure manner. Do not share the user credential information with
              anyone.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">
              Storing Your Personal Data
            </h3>
            <p className="mt-2">
              Data that is submitted in the portal is stored on safe and secure
              servers. All sensitive information is stored in encrypted mode.
            </p>
            <p className="mt-2">
              We provide you with the facility to view or edit your
              company&apos;s/personal information and such information cannot be viewed
              by others. You will be required to sign in with your credentials
              along with Digital Signature Certificate in the prescribed manner
              as provided on the sites to verify your authenticity.
            </p>
            <p className="mt-2">
              &quot;Personal Data&quot; means any information that can directly or
              indirectly identify a natural person or as that term (or similar
              variants) may otherwise be defined under applicable data protection
              and privacy laws, rules and regulations (&quot;Data Privacy Laws&quot;). The
              service provider agrees to protect such Personal Data received and
              confirm that they will not share any Personal Data received under
              this service with any external parties in compliance with DPDP Act,
              2023 and applicable Data Privacy Rules. It is pertinent to mention
              that the client department shall have access to the vendor profile
              including the personal data.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">AntiSpam Policy</h3>
            <p className="mt-2">
              The service provider reserves the right to reject and/or report any
              suspicious spam emails, to the authorities concerned, for necessary
              action, from time to time.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Third Party Links</h3>
            <p className="mt-2">
              You will not find any links to third party websites on our website.
              Only the approved interface to epayment gateways, Digital Signature
              authentication services, customer department website is allowed
              from our website. However, we do not accept any responsibility or
              liability for their policies whatsoever as we have no control over
              them.
            </p>
          </section>

          <Separator />

          <section>
            <h3 className="text-sm font-semibold">Your Consent</h3>
            <p className="mt-2">
              By using this site, you give your consent to the collection and use
              of information as outlined in the above documentation. If we decide
              to change our privacy policy, we will post those changes on this
              page so that you are always aware of what information we collect,
              how we use it, and under what circumstances we disclose it.
            </p>
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
