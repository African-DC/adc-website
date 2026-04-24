import { Footer } from "@/components/sections/footer";
import { NavbarDemo } from "@/components/sections/navbar-demo";
import { PageHero } from "@/components/sections/page-hero";
import ScrollProgress from "@/components/ui/scroll-progress";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment African Digit Consulting collecte, utilise et protège vos données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <ScrollProgress />
      <NavbarDemo />

      <PageHero
        title="Politique de confidentialité"
        subtitle="Comment nous protégeons et utilisons vos données personnelles."
        breadcrumbs={[
          {
            label: "Politique de confidentialité",
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
                  African Digit Consulting (ADC) s'engage à protéger la vie
                  privée des visiteurs de son site et des personnes qui entrent
                  en contact avec elle. La présente politique de
                  confidentialité a pour objet de vous informer, en toute
                  transparence, sur les données personnelles que nous
                  collectons, sur la manière dont nous les utilisons, ainsi que
                  sur les droits dont vous disposez sur ces informations.
                </p>
                <p>
                  En utilisant notre site ou en nous contactant, vous
                  reconnaissez avoir pris connaissance de cette politique.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  2. Responsable du traitement
                </h2>
                <p>
                  Le responsable du traitement des données personnelles
                  collectées via ce site est :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>African Digit Consulting</strong>
                  </li>
                  <li>Netzify Coworking, Rue L158, Angré, Abidjan</li>
                  <li>Côte d'Ivoire</li>
                  <li>
                    Email :{" "}
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
                  3. Données collectées
                </h2>
                <p>
                  Nous collectons uniquement les données strictement
                  nécessaires au traitement de vos demandes et à l'amélioration
                  de votre expérience :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Via le formulaire de contact</strong> (propulsé par
                    Web3Forms) : nom, adresse email, numéro de téléphone, nom
                    de l'entreprise, service souhaité et contenu du message.
                  </li>
                  <li>
                    <strong>Via les outils de mesure d'audience</strong>, le
                    cas échéant : adresse IP anonymisée, pages visitées, type
                    de navigateur et appareil utilisé.
                  </li>
                </ul>
                <p>
                  Nous ne collectons aucune donnée bancaire ou de paiement sur
                  ce site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  4. Finalités du traitement
                </h2>
                <p>Vos données sont utilisées pour :</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Répondre à vos demandes de contact et d'informations.
                  </li>
                  <li>
                    Vous adresser, lorsque vous en faites la demande, des
                    propositions commerciales adaptées à votre projet.
                  </li>
                  <li>
                    Mesurer l'audience du site et améliorer son contenu et son
                    ergonomie.
                  </li>
                  <li>
                    Assurer la sécurité du site et prévenir les usages
                    frauduleux.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  5. Base légale du traitement
                </h2>
                <p>
                  Les traitements décrits ci-dessus reposent sur les bases
                  légales suivantes :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Votre consentement</strong>, lorsque vous
                    soumettez le formulaire de contact.
                  </li>
                  <li>
                    <strong>Notre intérêt légitime</strong> à assurer le bon
                    fonctionnement du site et à analyser son audience de
                    manière anonymisée.
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  6. Durée de conservation
                </h2>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Données du formulaire de contact : conservées au maximum 3
                    ans après le dernier échange.
                  </li>
                  <li>
                    Logs techniques et données d'audience : conservés 12 mois
                    maximum.
                  </li>
                </ul>
                <p>
                  Au-delà de ces durées, vos données sont supprimées ou
                  anonymisées.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  7. Partage avec des tiers
                </h2>
                <p>
                  Nous ne vendons ni ne louons vos données à des tiers. Vos
                  données peuvent être transmises à des prestataires techniques
                  strictement nécessaires au fonctionnement du site :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Web3Forms</strong> : traitement des soumissions du
                    formulaire de contact.
                  </li>
                  <li>
                    <strong>Vercel</strong> : hébergement et diffusion du site.
                  </li>
                </ul>
                <p>
                  Ces prestataires sont tenus contractuellement à des
                  obligations de confidentialité et de sécurité.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  8. Vos droits
                </h2>
                <p>
                  Conformément à la réglementation applicable en matière de
                  protection des données personnelles, vous disposez des
                  droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Droit d'accès à vos données.</li>
                  <li>Droit de rectification des données inexactes.</li>
                  <li>Droit à l'effacement de vos données.</li>
                  <li>Droit d'opposition au traitement.</li>
                  <li>Droit à la portabilité de vos données.</li>
                  <li>Droit de retirer votre consentement à tout moment.</li>
                </ul>
                <p>
                  Pour exercer ces droits, il vous suffit de nous écrire à{" "}
                  <a
                    href="mailto:contact@africandigitconsulting.com"
                    className="text-orange-600 hover:underline"
                  >
                    contact@africandigitconsulting.com
                  </a>
                  . Nous nous engageons à vous répondre dans un délai maximum
                  de 30 jours.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  9. Cookies
                </h2>
                <p>
                  Nous utilisons uniquement des cookies strictement nécessaires
                  au bon fonctionnement du site (session technique). Aucun
                  cookie publicitaire ni cookie de suivi tiers n'est déposé
                  sans votre accord.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  10. Sécurité
                </h2>
                <p>
                  ADC met en œuvre les mesures techniques et organisationnelles
                  appropriées pour protéger vos données : connexion HTTPS,
                  accès restreint aux données, sauvegardes régulières,
                  formation et sensibilisation des équipes aux bonnes pratiques
                  de sécurité.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  11. Modifications de la politique
                </h2>
                <p>
                  La présente politique peut être mise à jour pour refléter
                  l'évolution de nos pratiques ou de la réglementation. Toute
                  modification prend effet dès sa publication sur cette page.
                  La date de la dernière mise à jour figure en bas de ce
                  document.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  12. Contact
                </h2>
                <p>
                  Pour toute question relative à la présente politique ou au
                  traitement de vos données personnelles, vous pouvez nous
                  contacter :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    Par email :{" "}
                    <a
                      href="mailto:contact@africandigitconsulting.com"
                      className="text-orange-600 hover:underline"
                    >
                      contact@africandigitconsulting.com
                    </a>
                  </li>
                  <li>
                    Via notre{" "}
                    <Link
                      href="/contact"
                      className="text-orange-600 hover:underline"
                    >
                      formulaire de contact
                    </Link>
                    .
                  </li>
                </ul>
              </section>

              <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
                Dernière mise à jour : 24 avril 2026
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
