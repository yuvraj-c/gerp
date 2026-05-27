import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

export default function DisclaimerPage() {
  return (
    <div>
      <div className="mb-2">
        <h1 className="font-heading text-2xl font-bold text-center">
          Disclaimer
        </h1>
        <p className="mt-2 text-base font-semibold text-center">
          Indian Institute of Technology Bombay
        </p>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Disclaimer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-relaxed">
          <p>
            Tenderwizard.com expressly disclaims any liability or responsibility
            for any damages, loss or injury arising out of any business
            transaction/s or contract/s between the buyer/s, vendor/s and/or any
            related/not related/involved persons or any other party due to the
            usage of this website.
          </p>
          <p>
            You are advised to read and understand the contents of this
            disclaimer clause notices carefully before you avail the services of
            TENDERWIZARD and its related sites.
          </p>
          <p>
            Service Provider does not guarantee the accuracy, authenticity and
            completeness of the information available on their site/sites as this
            is the sole responsibility of the source from where such information
            originate and Service provider cannot be held liable or responsible
            for any loss or damages cause to person or organization.
          </p>
          <p>
            The services, prices and information available on the site are
            subject to change and variable at any time without notice. The
            information and services at this Site may not be updated, and Service
            provider is not under any legal obligation to have the updated
            information and services on the site and is not liable for any direct
            and indirect loss or damage.
          </p>
          <p>
            Service provider can&apos;t be dragged for non updation of the information
            on the site in any court of law except as expressly provided herein,
            Service provider neither makes nor provides any representation or
            warranty, express or implied, as to the services or any software,
            equipment or systems, including without limitation, any implied
            warranty of merchantability or fitness for a particular purpose, or
            arising from course of performance or course of dealing, or that the
            services shall be provided error-free or uninterrupted. Service
            provider makes no representation or warranty with respect to, and
            shall not be responsible or liable for, any (a) corruption, damage,
            loss or mis-transmission of data, (b) security of data during
            transmission via public telecommunications facilities or (c) of the
            content of any data provided by client or client&apos;s representatives on
            the site.
          </p>
          <p>
            Service provider will not be responsible for the delivery of products
            purchased or sold during the tender / auction and will also not be
            responsible for any loss or damage of the products or delay in
            delivering the products or services.
          </p>
          <p>
            Service provider is not responsible for price changes of quoted
            products, and the quoted prices are valid for a particular auction
            scheduled for a particular period of time.
          </p>
          <p>
            It is hereby informed that Service provider doesn&apos;t deal with
            physical currency notes for any services/ product offerings. Request
            to refrain from any such dealings in physical currency notes with any
            employee and/ or representatives of Service provider. Service
            provider will not be liable for any loss incurred due to such
            unauthorized transactions and therefore deny fulfilment of services/
            products in lieu of such transactions. Report of such unauthorized
            transactions may be brought to the notice immediately by reporting it
            at mail id mail@etenderwizard.com
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
