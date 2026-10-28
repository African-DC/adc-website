"use client";

import { BlogArticleLayout } from "@/components/sections/blog-article-layout";
import { BlogGallery } from "@/components/gallery/blog-gallery";
import { Link } from "@/i18n/navigation";

export default function ArticlePage() {
  return (
    <BlogArticleLayout
      title={"KLASSCI parmi les 10 startups lauréates du PAES 2026"}
      subtitle={"Après le pitch final à la CGECI, ADC et KLASSCI sont retenues pour l’immersion au Maroc en décembre 2026. Une reconnaissance qui engage la suite."}
      eyebrow={"Blog · Distinctions · 27 octobre 2026"}
      breadcrumbs={[{ label: "Blog", href: "/blog" }, { label: "KLASSCI", href: "/blog/klassci-paes-2026-cdc-ci-capital" }]}
      hero={{ position: "50% 75%", src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "Présentation de KLASSCI devant le jury du PAES 2026, avec sa traction affichée à l’écran" }}
      cta={{ title: "Vous souhaitez découvrir le projet distingué ?", label: "Découvrir KLASSCI", href: "/nos-realisations/klassci" }}
    >
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-lg leading-relaxed text-neutral-800">
          <p className="font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">{"KLASSCI fait partie des dix startups lauréates du PAES 2026. À l’issue du pitch final du 24 octobre à la CGECI, African Digit Consulting a été retenue pour poursuivre le programme avec une immersion au Maroc en décembre 2026. Cette distinction reconnaît le chemin parcouru et donne une nouvelle portée à notre ambition pour l’éducation africaine."}</p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            {"Une distinction portée par une équipe et une vision."}
          </h2>
          <p>
            {"Aux côtés d’Abel Josias Bede, Marcel Djedje-li, responsable du développement de KLASSCI, a défendu le projet devant le jury. La sélection parmi les dix lauréates est un moment de reconnaissance pour l’équipe ADC et pour le travail mené avec les établissements utilisateurs."}
          </p>
          <p>
            {"Notre conviction est claire : KLASSCI est une infrastructure numérique pensée pour aider les établissements africains à mieux piloter leurs activités, exploiter leurs données et améliorer durablement leurs performances. Le pitch a permis de relier cette ambition aux usages concrets du produit."}
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            {"Rendre la valeur du produit concrète."}
          </h2>
          <p>
            {"La semaine de préparation à l’investissement, organisée dans le cadre du PAES par CDC-CI Capital et l’Agence Emploi Jeunes avec Plug and Play Tech Center, a été un temps de remise en question et de structuration. Du 19 au 23 octobre, nous avons travaillé notre présentation, notre dossier investisseurs et notre stratégie de développement."}
          </p>
          <p>
            {"Quel problème résolvons-nous réellement pour les établissements ? Comment prouver notre impact ? Pourquoi maintenant ? Et comment faire de KLASSCI un acteur majeur de la transformation éducative en Afrique ? Ces questions ont guidé notre préparation."}
          </p>
          <p>
            {"Comme le souligne Marcel dans son retour d’expérience, un produit solide doit aussi savoir rendre sa valeur lisible : montrer ce qu’il change dans le quotidien des équipes et défendre avec clarté l’ambition qui le porte. Les inscriptions, les paiements, la pédagogie et les données deviennent ainsi les points d’appui d’une vision d’ensemble."}
          </p>

          <h2 className="pt-4 font-serif text-3xl leading-tight font-medium text-neutral-950 md:text-4xl">
            {"Cap sur le Maroc, avec la même exigence."}
          </h2>
          <p>
            {"L’immersion prévue au Maroc en décembre 2026 ouvre la prochaine étape : présenter le projet à des investisseurs internationaux, poursuivre les échanges et préparer les conditions de son développement."}
          </p>
          <p>
            {"Être lauréat nous engage à continuer de construire, d’apprendre et d’écouter nos utilisateurs. Cette reconnaissance renforce notre responsabilité envers les établissements qui nous font confiance et notre exigence sur la qualité du produit."}
          </p>
          <p>
            {"Merci à CDC-CI Capital, à l’Agence Emploi Jeunes et à Plug and Play Tech Center pour cet accompagnement. Merci aussi aux mentors, aux entrepreneurs rencontrés et à toutes les personnes qui croient en notre vision. Le travail continue."}
          </p>

          <blockquote className="my-10 border-l-2 border-orange-500 pl-6 font-serif text-2xl leading-snug font-light italic text-neutral-900 md:text-3xl">
            {"« Être retenus parmi les 10 startups qui poursuivront l’aventure au Maroc est une belle reconnaissance. Mais surtout, c’est une responsabilité : continuer à construire, apprendre, écouter nos utilisateurs et élever notre niveau d’exigence. »"}
            <footer className="mt-4 font-sans text-sm not-italic text-neutral-600">
              Marcel Djedje-li, responsable du développement de KLASSCI — retour d’expérience partagé sur LinkedIn.
            </footer>
          </blockquote>
          <aside className="border-y border-neutral-200 py-6">
            <Link className="inline-flex min-h-11 items-center font-semibold text-orange-600 hover:text-orange-700" href="/nos-realisations/klassci">Découvrir KLASSCI</Link>
          </aside>
          <p className="text-sm text-neutral-500">Photos du pitch et de la semaine PAES : visuels communiqués par l’équipe ADC.</p>
          <aside className="border-t border-neutral-200 pt-6 text-sm text-neutral-600"><p className="font-semibold">Sources</p><ul className="mt-3 space-y-2"><li><a className="underline underline-offset-4" href="https://cdccapital.ci/paes-2026-20-startups-ivoiriennes-en-preparation-intensive-a-la-levee-de-fonds/">CDC-CI Capital — PAES 2026</a></li><li><a className="underline underline-offset-4" href="https://ladiplomatiquedabidjan.net/blog/cote-divoire-paes-2026-dix-startups-ivoiriennes-au-maroc-pour-une-levee-de-fonds-avec-plug-and-play-en-decembre-prochain">La Diplomatique d’Abidjan — les dix lauréates</a></li></ul></aside>
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-6 pb-12" aria-labelledby="paes-pitch-title">
        <h2 id="paes-pitch-title" className="mb-6 font-serif text-3xl font-medium text-neutral-950">Notre pitch devant le jury</h2>
        <p className="mb-6 text-neutral-600">La captation complète est proposée en deux parties consécutives pour faciliter le chargement.</p>
        <div className="grid items-start gap-8 md:grid-cols-2">
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-poster-1.webp" aria-label="Pitch KLASSCI au PAES 2026 — partie 1 sur 2" className="aspect-video w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-1.mp4" type="video/mp4" />
              <a href="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-1.mp4">Télécharger la vidéo</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Pitch KLASSCI au PAES 2026 — partie 1 sur 2 · 0:00–2:00</figcaption>
          </figure>
          <figure>
            <video controls playsInline preload="metadata" poster="/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-poster-2.webp" aria-label="Pitch KLASSCI au PAES 2026 — partie 2 sur 2" className="aspect-video w-full rounded-xl bg-neutral-950 object-contain">
              <source src="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-2.mp4" type="video/mp4" />
              <a href="/videos/blog/klassci-paes-2026-cdc-ci-capital/pitch-paes-partie-2.mp4">Télécharger la vidéo</a>
            </video>
            <figcaption className="mt-3 text-sm text-neutral-600">Pitch KLASSCI au PAES 2026 — partie 2 sur 2 · 2:00–3:58</figcaption>
          </figure>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-6 pb-12" aria-labelledby="klassci-film-title">
        <h2 id="klassci-film-title" className="mb-6 font-serif text-3xl font-medium text-neutral-950">Le projet distingué, en vidéo</h2>
        <figure>
          <video controls playsInline preload="metadata" poster="/img/blog/klassci-paes-2026-cdc-ci-capital/film-poster.webp" aria-label="Film de présentation de KLASSCI et témoignages utilisateurs" className="mx-auto aspect-[9/16] max-h-[75vh] w-full rounded-xl bg-neutral-950 object-contain">
            <source src="/videos/blog/klassci-paes-2026-cdc-ci-capital/presentation-klassci.mp4" type="video/mp4" />
            <a href="/videos/blog/klassci-paes-2026-cdc-ci-capital/presentation-klassci.mp4">Télécharger la vidéo</a>
          </video>
          <figcaption className="mt-3 text-sm text-neutral-600">Film de présentation de KLASSCI et témoignages d’utilisateurs. Ce film présente la solution ; il ne s’agit pas d’une captation du pitch PAES.</figcaption>
        </figure>
      </section>
      <BlogGallery eyebrow="Galerie · PAES 2026" columns={2} aspect="landscape" images={[
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/hero.webp", alt: "Pitch KLASSCI : présentation de la traction devant le jury" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-produit.webp", alt: "Pitch KLASSCI : présentation du produit et de ses usages" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/pitch-modele.webp", alt: "Pitch KLASSCI : présentation du modèle économique" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/echanges.webp", alt: "Échanges entre participants pendant la semaine PAES" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/1.webp", alt: "Rencontre entre participants au PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/2.webp", alt: "Salle préparée pour le programme PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/3.webp", alt: "Supports Agence Emploi Jeunes et CDC-CI Capital" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/4.webp", alt: "Présentation devant le jury pendant le PAES 2026" },
        { src: "/img/blog/klassci-paes-2026-cdc-ci-capital/5.webp", alt: "Prise de parole au pupitre CDC-CI Capital" },
      ]} />
    </BlogArticleLayout>
  );
}
