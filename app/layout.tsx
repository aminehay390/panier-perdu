import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const titre = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-titre",
  display: "swap",
});
const texte = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-texte",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Panier Perdu : récupère les paniers abandonnés de ta boutique",
  description:
    "Deux relances écrites et personnalisées, envoyées toutes seules aux clients qui ont quitté leur panier. 29 € par mois, relances illimitées.",
  openGraph: {
    title: "Panier Perdu : récupère les paniers abandonnés",
    description:
      "Deux relances automatiques pour les petites boutiques Shopify. 29 € par mois, sans engagement.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${titre.variable} ${texte.variable}`}>
      <body className="font-texte antialiased">{children}</body>
    </html>
  );
}
