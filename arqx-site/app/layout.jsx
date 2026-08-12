import "./globals.css";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import MobileNav from "@/components/chrome/MobileNav";
import Reveal from "@/components/Reveal";
import ReviewWidget from "@/components/review/ReviewWidget";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";
import { SITEWIDE_GRAPH, JsonLd } from "@/lib/schema";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ARQX · A primeira rede de escritórios de arquitetura do Brasil",
    template: "%s | ARQX",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og/default.png", width: 1200, height: 630, alt: "arqx® · a primeira rede de escritórios de arquitetura do Brasil" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/default.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload das fontes críticas (spec §4.1): Berling (hero) + Inter 400 (corpo) */}
        <link rel="preload" href="/fonts/berling-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <JsonLd data={SITEWIDE_GRAPH} />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileNav />
        <Reveal />
        <ReviewWidget />
      </body>
    </html>
  );
}
