import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";

export default function PolitiqueConfidentialiteContentEn() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Privacy Policy"
        subtitle="How we protect and use your personal data."
        breadcrumbs={[
          {
            label: "Privacy Policy",
            href: "/politique-confidentialite",
          },
        ]}
        pageTheme="default"
        useAbstractBackground={true}
      />

      <main className="overflow-hidden">
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <div className="space-y-12 text-gray-700 leading-relaxed">
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  1. Introduction
                </h2>
                <p>
                  African Digit Consulting (ADC) is committed to protecting the
                  privacy of its website visitors and of the individuals who
                  contact the company. The purpose of this privacy policy is
                  to inform you, with full transparency, about the personal
                  data we collect, how we use it, and the rights you have over
                  that information.
                </p>
                <p>
                  By using our website or contacting us, you acknowledge that
                  you have read this policy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  2. Data controller
                </h2>
                <p>
                  The data controller for the personal data collected through
                  this website is:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>African Digit Consulting</strong>
                  </li>
                  <li>Siti Dia, Grand-Bassam Monckey-ville</li>
                  <li>Côte d'Ivoire</li>
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:contact@africandigitconsulting.com"
                      className="text-orange-600 hover:underline"
                    >
                      contact@africandigitconsulting.com
                    </a>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  3. Data collected
                </h2>
                <p>
                  We only collect data that is strictly necessary to handle
                  your requests and improve your experience:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Through the contact form</strong> (powered by
                    Web3Forms): name, email address, phone number, company
                    name, requested service, and message content.
                  </li>
                  <li>
                    <strong>Through audience measurement tools</strong>, where
                    applicable: anonymised IP address, pages visited, browser
                    type, and device used.
                  </li>
                </ul>
                <p>
                  We do not collect any banking or payment data through this
                  website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Purposes of processing
                </h2>
                <p>Your data is used to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Respond to your contact and information requests.
                  </li>
                  <li>
                    Send you, upon your request, commercial proposals tailored
                    to your project.
                  </li>
                  <li>
                    Measure website audience and improve its content and
                    usability.
                  </li>
                  <li>
                    Ensure the security of the website and prevent fraudulent
                    use.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Legal basis for processing
                </h2>
                <p>
                  The processing activities described above rely on the
                  following legal bases:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Your consent</strong>, when you submit the contact
                    form.
                  </li>
                  <li>
                    <strong>Our legitimate interest</strong> in ensuring the
                    proper operation of the website and analysing its audience
                    on an anonymised basis.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Retention period
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Contact form data: retained for a maximum of 3 years after
                    the last exchange.
                  </li>
                  <li>
                    Technical logs and audience data: retained for a maximum
                    of 12 months.
                  </li>
                </ul>
                <p>
                  Beyond these periods, your data is deleted or anonymised.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  7. Sharing with third parties
                </h2>
                <p>
                  We do not sell or rent your data to third parties. Your data
                  may be transmitted to data processors that are strictly
                  necessary for the operation of the website:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Web3Forms</strong>: processing of contact form
                    submissions.
                  </li>
                  <li>
                    <strong>Vercel</strong>: website hosting and delivery.
                  </li>
                </ul>
                <p>
                  These processors are contractually bound by confidentiality
                  and security obligations.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  8. Your rights
                </h2>
                <p>
                  In accordance with applicable personal data protection
                  regulations (including the EU General Data Protection
                  Regulation and the Ivorian data protection law), you have
                  the following rights:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Right to access your data.</li>
                  <li>Right to rectify inaccurate data.</li>
                  <li>Right to erasure of your data.</li>
                  <li>Right to object to processing.</li>
                  <li>Right to data portability.</li>
                  <li>Right to withdraw your consent at any time.</li>
                </ul>
                <p>
                  To exercise these rights, simply write to us at{" "}
                  <a
                    href="mailto:contact@africandigitconsulting.com"
                    className="text-orange-600 hover:underline"
                  >
                    contact@africandigitconsulting.com
                  </a>
                  . We commit to replying within a maximum of 30 days.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  9. Cookies
                </h2>
                <p>
                  We only use cookies that are strictly necessary for the
                  proper functioning of the website (technical session). No
                  advertising cookies or third-party tracking cookies are
                  placed without your consent.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  10. Security
                </h2>
                <p>
                  ADC implements appropriate technical and organisational
                  measures to protect your data: HTTPS connection, restricted
                  access to data, regular backups, and staff training and
                  awareness on security best practices.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  11. Policy updates
                </h2>
                <p>
                  This policy may be updated to reflect changes in our
                  practices or in applicable regulations. Any modification
                  takes effect as soon as it is published on this page. The
                  date of the latest update is shown at the bottom of this
                  document.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  12. Contact
                </h2>
                <p>
                  For any question about this policy or the processing of your
                  personal data, you can contact us:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    By email:{" "}
                    <a
                      href="mailto:contact@africandigitconsulting.com"
                      className="text-orange-600 hover:underline"
                    >
                      contact@africandigitconsulting.com
                    </a>
                  </li>
                  <li>
                    Through our{" "}
                    <Link
                      href="/en/contact"
                      className="text-orange-600 hover:underline"
                    >
                      contact form
                    </Link>
                    .
                  </li>
                </ul>
              </section>

              <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
                Last updated: 24 April 2026
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
