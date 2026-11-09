// ===== À REMPLIR =====
const LIEN_STRIPE = "#"; // colle ici ton lien de paiement Stripe (action 6)
const EMAIL_CONTACT = "REMPLACE@TON-EMAIL.fr"; // ton e-mail de contact
const DATE_LIVRAISON = "[DATE DE LIVRAISON]"; // ex : 30 novembre
// =====================

const faq = [
  {
    q: "Est-ce que ça marche pour ma boutique ?",
    r: "Panier Perdu est conçu pour les boutiques Shopify qui font quelques dizaines de commandes par mois. WooCommerce arrivera après les premiers clients.",
  },
  {
    q: "Combien de temps ça me prend ?",
    r: "Environ dix minutes pour brancher ta boutique. Ensuite, les relances partent seules, tu n'as rien à faire.",
  },
  {
    q: "Et si je veux arrêter ?",
    r: "Tu résilies quand tu veux, sans préavis. Et pendant 30 jours, tu es remboursé sur simple e-mail.",
  },
  {
    q: "À quoi sert exactement ce que je paie ?",
    r: "À deux e-mails de relance par panier abandonné, envoyés automatiquement, avec un code de réduction facultatif sur le second. Relances illimitées, un compteur te montre les euros récupérés.",
  },
];

export default function Page() {
  return (
    <main className="pb-24 md:pb-0">
      <header className="mx-auto max-w-2xl px-5 pt-8 md:pt-16">
        <p className="font-titre text-lg font-bold text-vert">Panier Perdu</p>
        <h1 className="mt-6 font-titre text-4xl font-extrabold leading-[1.05] md:text-6xl">
          Tes paniers abandonnés, relancés tout seuls.
        </h1>
        <p className="mt-5 text-lg leading-relaxed">
          Environ 7 paniers sur 10 sont remplis puis abandonnés. Les outils de
          relance sont pensés pour les grosses boutiques, alors toi, tu ne relances
          rien. Panier Perdu le fait pour 29 € par mois.
        </p>
        <a
          id="cta"
          href={LIEN_STRIPE}
          className="mt-7 flex h-14 items-center justify-center rounded-lg bg-vert px-6 text-lg font-semibold text-papier md:inline-flex"
        >
          Réserver mon accès fondateur
        </a>
        <p className="mt-3 text-sm">Sans engagement, résiliable à tout moment.</p>
      </header>

      <section className="mx-auto mt-14 max-w-2xl px-5">
        <h2 className="font-titre text-2xl font-bold md:text-3xl">
          Ce que tu obtiens
        </h2>
        <ul className="mt-5 space-y-4">
          <li className="rounded-lg bg-vert-clair p-5">
            <p className="font-semibold">Deux relances écrites pour toi</p>
            <p className="mt-1">
              Un premier e-mail rappelle le panier, un second arrive plus tard.
              Chacun reprend les produits laissés par le client.
            </p>
          </li>
          <li className="rounded-lg bg-vert-clair p-5">
            <p className="font-semibold">Un code de réduction, si tu veux</p>
            <p className="mt-1">
              Tu peux ajouter un code uniquement sur la seconde relance, pour
              convaincre ceux qui hésitent encore.
            </p>
          </li>
          <li className="rounded-lg bg-vert-clair p-5">
            <p className="font-semibold">Les euros récupérés, comptés</p>
            <p className="mt-1">
              Un compteur affiche le chiffre d'affaires ramené par les relances.
              Tu vois ce que tu paies et ce que ça rapporte.
            </p>
          </li>
        </ul>
      </section>

      <section className="mx-auto mt-14 max-w-2xl px-5">
        <div className="rounded-lg border-2 border-vert p-5 md:p-7">
          <h2 className="font-titre text-2xl font-bold md:text-3xl">
            Accès fondateur
          </h2>
          <p className="mt-3 text-lg">
            <span className="bg-signal px-1 font-bold">29 € par mois</span>, soit
            moins d'un euro par jour. Relances illimitées.
          </p>
          <p className="mt-4">
            Panier Perdu est en construction. En réservant, tu fais partie des
            premiers clients : tu es servi en premier, et ton retour façonne le
            produit.
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Livraison :</strong> ton accès est ouvert d'ici le{" "}
              {DATE_LIVRAISON}.
            </li>
            <li>
              <strong>Garantie 30 jours :</strong> écris à {EMAIL_CONTACT}, et tu
              es remboursé intégralement, sans justification.
            </li>
            <li>
              <strong>Sans engagement :</strong> tu résilies quand tu veux.
            </li>
          </ul>
          <a
            href={LIEN_STRIPE}
            className="mt-6 flex h-14 items-center justify-center rounded-lg bg-vert px-6 text-lg font-semibold text-papier"
          >
            Réserver pour 29 € par mois
          </a>
          <p className="mt-3 text-sm">
            Paiement sécurisé par Stripe. Sans engagement, résiliable à tout moment.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 max-w-2xl px-5">
        <h2 className="font-titre text-2xl font-bold md:text-3xl">Questions</h2>
        <div className="mt-4 divide-y divide-encre/20 border-y border-encre/20">
          {faq.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none pr-6 font-semibold">
                {item.q}
              </summary>
              <p className="mt-2">{item.r}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-14 max-w-2xl px-5 pb-10 text-sm">
        <p>Panier Perdu, 2026.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 border-t border-encre/20 bg-papier p-3 md:hidden">
        <a
          href={LIEN_STRIPE}
          className="flex h-12 items-center justify-center rounded-lg bg-vert font-semibold text-papier"
        >
          Réserver mon accès, 29 €/mois
        </a>
      </div>
    </main>
  );
}
